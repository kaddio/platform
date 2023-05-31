import { fail } from '@sveltejs/kit';

export const createOrg = async function({request}){

        const data = await request.formData();
        const jsonData = Object.fromEntries(data.entries());

        console.log(jsonData)

        try{
            const response = await fetch('https://api.kaddio.com/api/org', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData)
            });
            
            const r = await response.json();
            console.log(r);

            if(r.status == 'success'){
                return {
                    success: true
                }
            }

            else if(r.status == 'fail' && r.msg == 'Alla fält är ej ifyllda'){
                return fail(400, {
                    missingFields: true
                })
            }

            else if(r.status == 'fail' && r.msg == 'URL är upptagen, prova med en annan'){
                return fail(400, {
                    urlUnavailable: true
                })
            }

            return fail(400)
        }

        catch(e){
            console.log(e);
            return fail(400, {success: false});
        }
}
