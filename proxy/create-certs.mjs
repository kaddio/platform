#!/usr/bin/env zx

const path = "certs";
const password = "kaddio";

console.log(process.argv);

// Get the unencrypted private key path from the command-line arguments
const providedKeyPath = process.argv[3];
if (!providedKeyPath) {
    console.error("Usage: ./create-certs.mjs <provided-key-path>");
    process.exit(1);
}

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
const serverKey = providedKeyPath; // Use the provided key
const serverCsr = `${path}/server-csr.pem`;
const serverCert = `${path}/server-cert.pem`;
const clientKey = `${path}/client-key.pem`;
const clientCsr = `${path}/client-csr.pem`;
const clientCert = `${path}/client-cert.pem`;

console.log("Creating the self-signed certificate for the CA...");
await $`openssl req -new -x509 -key ${caKey} -passin pass:${password} -out ${caCert} -days 365 -subj "/CN=CA"`;

console.log("Creating a Certificate Signing Request (CSR) for the server...");
await $`openssl req -new -key ${serverKey} -passin pass:${password} -out ${serverCsr} -subj "/CN=kaddiotestarnpo.kaddio.com"`;

console.log("Signing the server CSR with the CA to generate the server certificate...");
await $`openssl x509 -req -in ${serverCsr} -CA ${caCert} -CAkey ${caKey} -passin pass:${password} -CAcreateserial -out ${serverCert} -days 365`;

console.log("Generating the private key for the client...");
await $`openssl genrsa -aes256 -passout pass:${password} -out ${clientKey} 2048`;

console.log("Creating a Certificate Signing Request (CSR) for the client...");
await $`openssl req -new -key ${clientKey} -passin pass:${password} -out ${clientCsr} -subj "/CN=client"`;

console.log("Signing the client CSR with the CA to generate the client certificate...");
await $`openssl x509 -req -in ${clientCsr} -CA ${caCert} -CAkey ${caKey} -passin pass:${password} -CAcreateserial -out ${clientCert} -days 365`;

console.log(`Server certificate generated using provided key: ${serverKey}`);