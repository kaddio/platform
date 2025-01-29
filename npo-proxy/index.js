import fetch from 'node-fetch';
import https from 'https';

import fs from 'fs';

const port = process.env.PORT || 3900;
const target = process.env.TARGET || "http://host.docker.internal:3000";
console.log(`target ${target}`);

const verifyClientCertificate = (req) => {
  const validSerialNumbers = ['0766BCF63F1F7DA27B09D2AB4B1672A5F783AF53'];
  const cert = req.client.getPeerCertificate();
  console.log(cert.serialNumber)

  if (!cert || !cert.serialNumber) {
    throw new Error('No client certificate provided');
  }

  if (!validSerialNumbers.includes(cert.serialNumber)) {
    throw new Error('No matching serial number found');
  }
}

const currentPath = process.cwd();

// Error: mac verify failure = Wrong password!
const options = {
    // ca: fs.readFileSync(`${currentPath}/test/certs/ca-cert.pem`),
    pfx: fs.readFileSync(`${currentPath}/test/certs/server-cert.p12`),
    passphrase: 'kaddio',
    rejectUnauthorized: false,
    requestCert: true,
  };
  

const proxyRequest = async (req, res, targetUrl) => {
  try {
    const url = targetUrl;
    console.log(`url ${url}`);

    // Add a bogus header, this is our secret.
    const headers = {
      // ...req.headers,
      'x-secret': 'mb'
    };

    const response = await fetch(url, { headers });

    if(!response.ok) {
      console.log('bad response');
      return;
    }

    // res.writeHead(response.status, response.headers.raw());
    response.body.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(400).send('Error');
  }
};

const server = https.createServer(options, (req, res) => {
  try{
      verifyClientCertificate(req);
      console.log('Client certificate valid');
  }

  catch(error) {
      console.log('Client certificate invalid', error);

      if(res){
        res.writeHead(401, { 'Content-Type': 'text/plain' });
        res.end('Unauthorized');  
      }

      return;
  }

    if (req.url.startsWith('/api1/')) {
      proxyRequest(req, res, target + '/api/npo/proxied');
    } else if (req.url.startsWith('/api2/')) {
      proxyRequest(req, res, 'http://example2.com');
    } else if (req.url.startsWith('/api3/')) {
      proxyRequest(req, res, 'http://example3.com');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });
  

server.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});