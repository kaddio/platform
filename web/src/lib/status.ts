export async function statusPageState() {
    const token = 'ZgZ9JWiMQvsxz9qRWqETg47z';
    const statusPageId = '198127';
    const url = `https://betteruptime.com/api/v2/status-pages/${statusPageId}`;

    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    if (!resp.ok) {
        return;
    }

    const json = await resp.json();

    const aggregateState = json.data.attributes.aggregate_state;

    const status = aggregateState == 'operational';

    return status;
}

// We could eventually do this and get rid of their js: https://uptime.betterstack.com/widgets/announcement?id=198127
