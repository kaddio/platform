import { json } from "@sveltejs/kit";

export async function OPTIONS({request}){
    const req = await request.json()
    console.log(req);

    return json(req, {status: 201})
}

export async function POST({request}){
    const req = await request.json()
    console.log('callback??')
    console.log(req);

    return json(req, {status: 201})
    
}