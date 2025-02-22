import http from 'http';
import https from 'https';
import fs from 'fs';
import fetch from 'node-fetch';
import crypto from 'crypto';

const portProxy = 443;
const portHello = 80;

const target = process.env.TARGET || 'https://kaddiotestarnpo-app.kaddio.com';

{
  if (target) {
    console.log(`Target is ${target}`);
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
  // passphrase: fs.readFileSync('certs/passphrase.txt', 'utf8').trim(),

  key: privateKey,
  cert: fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.pem')+fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.ca.pem'),
  // passphrase: fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.passphrase.txt', 'utf8').trim(),

  requestCert: true,
  rejectUnauthorized: false
};

// Create HTTP server
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
}).listen(portHello, () => {
  console.log(`HTTP server running at ${portHello}/`);
});

// Create HTTPS server
https.createServer(options, async (req, res) => {
  // Make sure client is either providing client certs or has lowered their guard (curl -k) to get here.

  if(!req.client.authorized){
    console.log('Client not authorized');
    console.log(req.headers);
    console.log(`Origin IP: ${req.socket.remoteAddress}`);
    const cert = req.client.getPeerCertificate();

    console.log(`Fingerprint: ${cert.fingerprint}`);

    // Don't care at the moment, just proxy the request !!!

    // res.writeHead(401, { 'Content-Type': 'text/plain' });
    // res.end('Client certificate required');

    // return;

    console.log(`Will proxy anyway 😎. Target: ${target + req.url}`);
  }

  if(req.client.authorized){
    console.log(`Client authorized! Will try to proxy request to ${target + req.url}`);
  }
  console.log(req.url);

  const secret = crypto.createHash('sha256').update(privateKey).digest('hex');
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', async () => {
    try {
      console.log({body})
      const backendResponse = await fetch(target + req.url, {
      method: "POST",
      headers: {
        "content-type": "text/xml;charset=UTF-8",
        "x-secret": 'mb',
        'x-secret2': secret,
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