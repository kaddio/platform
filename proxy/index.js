import http from 'http';
import https from 'https';
import fs from 'fs';
import fetch from 'node-fetch';
import crypto from 'crypto';

const portProxy = 443;
const portHello = 80;
const target = process.env.TARGET || 'https://kaddiotestarnpo-app.kaddio.com';

const decryptedKey = fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.decrypted.key');

// Load SSL certificates
const options = {
  // key: fs.readFileSync('certs/server-key.pem'),
  // cert: fs.readFileSync('certs/server-cert.pem'),
  // ca: fs.readFileSync('certs/ca-cert.pem'),
  // passphrase: fs.readFileSync('certs/passphrase.txt', 'utf8').trim(),

  key: decryptedKey,
  cert: fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.pem')+fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.ca.pem'),
  // passphrase: fs.readFileSync('certs/kaddiotestarnpo.kaddio.com.passphrase.txt', 'utf8').trim(),

  requestCert: true,
  rejectUnauthorized: false
};

const createHmacSignature = (secret, nonce) => {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(nonce);
  return hmac.digest('base64');
}

const createNonce = () => {
  return crypto.randomBytes(16).toString('base64');
}

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

  const nonce = createNonce();
  const hmacSignature = createHmacSignature(decryptedKey, nonce);

  try {
    const backendResponse = await fetch(target + req.url, {
      method: "GET",
      headers: {
        'x-secret': 'mb',
        "x-hmac-signature": hmacSignature,
        "x-nonce": nonce,
      }
    });

    res.writeHead(backendResponse.status, backendResponse.headers.raw());
    backendResponse.body.pipe(res);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
}).listen(portProxy, () => {
  console.log(`Proxy server running at ${portProxy}/`);
});
