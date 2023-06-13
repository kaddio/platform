import { apiUrl } from '$lib/apiUrl.js'
import { redirect } from '@sveltejs/kit';
import { promises } from 'node:fs';
import { Agent } from 'node:https'
import axios from 'axios';


const createPaymentRequest = async function(payeeAlias: string, payerAlias: string|null, amount: string, currency = 'SEK'){
    // const pfx = await promises.readFile('src/lib/swish/...');
    // const ca = await promises.readFile('src/lib/swish/...');
    // const passphrase = 'swish';

    const cert = await promises.readFile('src/lib/swish/server/cert/Swish_Merchant_TestCertificate_1234679304.pem', {encoding: 'utf-8'})
    const key = await promises.readFile('src/lib/swish/server/cert/Swish_Merchant_TestCertificate_1234679304.key', {encoding: 'utf-8'})
    const ca = await promises.readFile('src/lib/swish/server/cert/Swish_TLS_RootCA.pem', {encoding: 'utf-8'})

    const httpsAgent = new Agent({
        cert,
        key,
        ca
    });

    const url = "https://mss.cpc.getswish.net/swish-cpcapi";

    const instructionUUID = crypto.randomUUID().replaceAll('-', '').toUpperCase();
    const callbackUrl = 'https://8afa1721b57a.ngrok.app';

    const data = {
        payeePaymentReference: '0123456789',
        payeeAlias,
        ...(payerAlias ? {payerAlias} : {}),

        amount,
        message: 'hejsan svejsan id123',
        currency,

        callbackUrl
    }

    let res;
    try{
        console.log(JSON.stringify(data))
        res = await axios(`${url}/api/v2/paymentrequests/${instructionUUID}`, {
            method: 'PUT',
            httpsAgent,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data)

        });
        // console.log(res.data)

    }
    
    catch(e){
        console.error(e.response?.data)

    }

    return res?.data;
}

type Invoice = {
    amount: number,
    _id: string,
    normalizedCellPhone?: string,
    currency: string
}

export const actions = {
    async default({request, params}){

        const invoiceId = params.id;
        console.log(invoiceId);

        const invoice: Invoice = await getInvoice(invoiceId);

        const data = await request.formData();
        const jsonData = Object.fromEntries(data.entries());

        switch(jsonData.device){

            case 'otherDevice': {
                await createPaymentRequest('1234679304', null, invoice.amount + "", invoice.currency);

                return {
                    status: 'open the swish app now, please'
                }
            }

            case 'sameDevice': {
                const token = await createPaymentRequest('1234679304', null, invoice.amount + "", invoice.currency);

                throw redirect(307, `swish://paymentrequest?token=${token}`)
            }
        }

    }
}

async function getInvoice(invoiceId: string): Promise<Invoice>{
    const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
        method: 'POST',
        body: JSON.stringify({query: `
            query {
                findInvoice(id: "${invoiceId}") {
                    normalizedCellPhone,
                    _id,
                    amount,
                    currency
                }
            }
        `}),

        headers: {
            'Content-Type': 'application/json',
        }
    })

    const data = await result.json();

    return data?.data?.findInvoice;
}

export async function load({ params }) {

    const invoice = getInvoice(params.id)

    return {
        invoice
    };    
}