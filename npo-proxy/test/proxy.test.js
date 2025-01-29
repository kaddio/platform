import { expect } from 'chai';
import fetch from 'node-fetch';
import https from 'https';
import fs from 'fs';

const port = process.env.PORT || 3900;

describe('Proxy Server', () => {
  it('should fetch data from the proxied endpoint', async () => {
    const currentPath = process.cwd();

    const agent = new https.Agent({
      pfx: fs.readFileSync(`${currentPath}/test/certs/client-cert.p12`),
      passphrase: 'kaddio',
      rejectUnauthorized: false
    });

    const response = await fetch(`https://localhost:${port}/api1/test`, { agent });
    const data = await response.text();

    expect(response.status).to.equal(200);
    expect(data).to.be.a('string');
    
    expect(data).to.include('Hello, streamed from Kaddio. Passed authentication.'); 
  });
});