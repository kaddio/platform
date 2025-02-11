#!/usr/bin/env zx

const path = "certs";
const password = "kaddio";

const ensurePathExists = async (path) => {
    try {
        await $`mkdir -p ${path}`;
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}

ensurePathExists(path);

const caKey = `${path}/ca-key.pem`;
const caCert = `${path}/ca-cert.pem`;
const serverKey = `${path}/server-key.pem`;
const serverCsr = `${path}/server-csr.pem`;
const serverCert = `${path}/server-cert.pem`;
const clientKey = `${path}/client-key.pem`;
const clientCsr = `${path}/client-csr.pem`;
const clientCert = `${path}/client-cert.pem`;

await $`openssl genrsa -aes256 -passout pass:${password} -out ${caKey} 2048`;
await $`openssl req -new -x509 -key ${caKey} -passin pass:${password} -out ${caCert} -days 365 -subj "/CN=CA"`;

await $`openssl genrsa -aes256 -passout pass:${password} -out ${serverKey} 2048`;
await $`openssl req -new -key ${serverKey} -passin pass:${password} -out ${serverCsr} -subj "/CN=kaddiotestarnpo.kaddio.net"`;
await $`openssl x509 -req -in ${serverCsr} -CA ${caCert} -CAkey ${caKey} -passin pass:${password} -CAcreateserial -out ${serverCert} -days 365`;

await $`openssl genrsa -aes256 -passout pass:${password} -out ${clientKey} 2048`;
await $`openssl req -new -key ${clientKey} -passin pass:${password} -out ${clientCsr} -subj "/CN=client"`;
await $`openssl x509 -req -in ${clientCsr} -CA ${caCert} -CAkey ${caKey} -passin pass:${password} -CAcreateserial -out ${clientCert} -days 365`;