// List all customers on hitta klinik!

export async function GET() {
    const xml = `
    
    `;

    return new Response(xml.trim(), {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
