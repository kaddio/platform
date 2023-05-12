<script>
	import Price from "../components/price.svelte";

    const modules = [{
        name: "Core",
		price: 149,
		selected: true,
        disabled: true
    },
    {
		name: "Journal",
		price: 119,
		selected: true
	},
    {
		name: "Tidsbokning & Kalender",
		price: 79,
		selected: true
	},
    {
		name: "Dokument",
		price: 29
	},
    {
		name: "Fakturering",
		price: 79
	},
    {
		name: "Video och Chat",
		price: 119
	},
    {
		name: "Hemsida",
		price: 29
	},
    {
		name: "Uppgifter",
		price: 29
	},
    {
		name: "Samlingsräkning Region",
		price: 29
	}
]
</script>


<Price currency="SEK" modules="{modules}">
	<span slot="title">Betala bara för vad du behöver</span>
	<span slot="sub">Ingen startkostnad. 1 månad kostnadsfritt.</span>

</Price>
