<script>
	import Price from "$components/price.svelte";

    const modules = [{
        name: "Core",
		price: 13,
		selected: true,
        disabled: true
    },
    {
		name: "Historia clínica",
		price: 9,
		selected: true
	},
    {
		name: "Reservas y Calendario",
		price: 9,
		selected: true
	},
    {
		name: "Facturación",
		price: 6
	},
    {
		name: "Vídeo y chat",
		price: 9
	}
]
</script>


<Price currency="EUR" modules="{modules}">
	<span slot="title">Paga solo por lo que uses</span>
	<span slot="sub">Sin cargo de inicio. 1 mes gratis.</span>
</Price>
