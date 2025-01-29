#!/usr/bin/env zx

const path = "certs";

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

const exportPassword = "kaddio";

const caKey = `${path}/ca-key.pem`;
const caCert = `${path}/ca-cert.pem`;
const serverKey = `${path}/server-key.pem`;
const serverCsr = `${path}/server-csr.pem`;
const serverCert = `${path}/server-cert.pem`;
const serverP12 = `${path}/server-cert.p12`;
const clientKey = `${path}/client-key.pem`;
const clientCsr = `${path}/client-csr.pem`;
const clientCert = `${path}/client-cert.pem`;
const clientP12 = `${path}/client-cert.p12`;

await $`openssl genrsa -out ${caKey} 2048`;
await $`openssl req -new -x509 -key ${caKey} -out ${caCert} -days 365 -subj "/CN=CA"`;

await $`openssl genrsa -out ${serverKey} 2048`;
await $`openssl req -new -key ${serverKey} -out ${serverCsr} -subj "/CN=Server"`;
await $`openssl x509 -req -in ${serverCsr} -CA ${caCert} -CAkey ${caKey} -CAcreateserial -out ${serverCert} -days 365`;
await $`openssl pkcs12 -export -out ${serverP12} -inkey ${serverKey} -in ${serverCert} -certfile ${caCert} -passout pass:${exportPassword}`;

await $`openssl genrsa -out ${clientKey} 2048`;
await $`openssl req -new -key ${clientKey} -out ${clientCsr} -subj "/CN=Client"`;
await $`openssl x509 -req -in ${clientCsr} -CA ${caCert} -CAkey ${caKey} -CAcreateserial -out ${clientCert} -days 365`;
await $`openssl pkcs12 -export -out ${clientP12} -inkey ${clientKey} -in ${clientCert} -certfile ${caCert} -passout pass:${exportPassword}`;

console.log('Certificates created successfully:');
console.log(`  CA Certificate: ${caCert}`);
console.log(`  Server Certificate: ${serverCert}`);
console.log(`  Server PKCS#12: ${serverP12}`);
console.log(`  Client Certificate: ${clientCert}`);
console.log(`  Client PKCS#12: ${clientP12}`);