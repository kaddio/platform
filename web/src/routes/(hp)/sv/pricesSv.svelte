<script>
    import Price from '$components/price.svelte';

    const modules = [
        {
            name: 'Core',
            price: 159,
            selected: true,
            disabled: true
        },
        {
            name: 'Journal',
            price: 119,
            selected: true
        },
        {
            name: 'Tidsbokning & Kalender',
            price: 119,
            selected: true
        },
        {
            name: 'Fakturering',
            price: 79
        },
        {
            name: 'Chat och Video',
            price: 119
        }
    ];
</script>

<Price currency="SEK" {modules}>
    <span slot="title">Betala bara för vad du behöver</span>
    <span slot="sub">Ingen startkostnad. 1 månad kostnadsfritt. </span>
    
</Price>
