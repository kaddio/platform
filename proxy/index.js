import http from 'http';
import https from 'https';
import fs from 'fs';
import fetch from 'node-fetch';
import crypto from 'crypto';

const portProxy = 443;
const portHello = 80;
const rejectUnauthorized = true;

console.log('###      ###')
console.log('###  V1  ###')
console.log('###      ###')
console.log(`Setting for Reject unauthorized: ${rejectUnauthorized}`);

const target = process.env.TARGET;
const targetBase = new URL(target);
{
  if (target) {
    console.log(`Target is ${targetBase}`);
  } else {
    console.error('WARNING - No npö proxy target specified!');
  }
}

const privateKey = fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.decrypted.key', 'utf8').trim()

// Load SSL certificates
const options = {
  // key: fs.readFileSync('certs/server-key.pem'),
  // cert: fs.readFileSync('certs/server-cert.pem'),
  // ca: fs.readFileSync('certs/ca-cert.pem'),

  key: privateKey,
  cert: fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.pem'),

  // Order of root and function cert does NOT matter.
  // .cer format does not seem to work. Use .pem
  ca: [
    fs.readFileSync('certs/testsithseidfunctioncav1.pem'), 
    fs.readFileSync('certs/testsithseidrootcav2.pem')
  ],

  requestCert: true,
  rejectUnauthorized,
  // minVersion: 'TLSv1.3',
};

const verifyRequest = (req) => {
  const certIsValid = req.client.authorized;
  const cert = req.client.getPeerCertificate();
  const hasCert = Object.keys(cert).length > 0;
  const fingerprint = cert.fingerprint;
  const originIP = req.socket.remoteAddress;
  const protocol = req.socket.getProtocol();
  const serialNumber = cert.serialNumber;

  const ok = hasCert && !!serialNumber; // Add certIsValid and validateSerialNumbers here later

  const validSerialNumbers = [
    '79A21A91ABB506C605A5143B1425A0DC4A69A9E9' // Self signed test cert
  ];

  if(ok){
    console.log(`Origin IP: ${originIP}`);
    console.log(`Protocol: ${protocol}`);
    console.log(cert);
    console.log(req.headers);
    console.log(`Fingerprint: ${fingerprint}`);
    console.log(`Serial number: ${serialNumber}`);

    if(!certIsValid){
      console.log(`Found client cert but could not validate it. Will proxy anyway 😎. Target: ${new URL(req.url, targetBase)}`);
    }

    return true;
  }

  throw new Error();
}

// Create HTTP server
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
}).listen(portHello, () => {
  console.log(`HTTP server running at ${portHello}/`);
});

const httpsServer = https.createServer(options, async (req, res) => {

  try{
    verifyRequest(req);
  }

  catch(err){
    console.log('Client not authorized');
    res.writeHead(401);
    res.end();
    return;
  }

  const secret = crypto.createHash('sha256').update(privateKey).digest('hex');
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', async () => {
    try {
      console.log({body})
      const backendResponse = await fetch(new URL(req.url, targetBase), {
      method: "POST",
      headers: {
        "Content-Type": "text/xml;charset=UTF-8",
        "x-secret": 'mb',
        'x-secret2': secret,
        'Accept-Encoding': 'identity'
      },
      body: body,
    });
    

    res.writeHead(backendResponse.status, backendResponse.headers.raw());
    backendResponse.body.pipe(res);
  } catch (error) {
      console.log(error)
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  });
}).listen(portProxy, () => {
  console.log(`Proxy server running at ${portProxy}/`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Optionally, you can log the error to a file or monitoring service
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Optionally, you can log the error to a file or monitoring service
});

httpsServer.on('clientError', (err, socket) => {
  console.error('Client error:', err);
  console.log(socket.getPeerCertificate())
  console.log(`Protocol: ${socket.getProtocol()}`)
  socket.end();
});