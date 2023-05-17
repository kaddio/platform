<script>
	import Price from "../components/price.svelte";

    const modules = [{
        name: "Core",
		price: 12,
		selected: true,
        disabled: true
    },
    {
		name: "Historia clínica",
		price: 9,
		selected: true
	},
    {
		name: "Reservas & Calendario",
		price: 6,
		selected: true
	},
    {
		name: "Documentos",
		price: 2
	},
    {
		name: "Facturación",
		price: 6
	},
    {
		name: "Vídeo y chat",
		price: 9
	},
    {
		name: "Página web",
		price: 2
	},
    {
		name: "Tareas",
		price: 2
	}
]
</script>


<Price currency="EUR" modules="{modules}">
	<span slot="title">Only pay for what you use</span>
	<span slot="sub">No startup fee. 1 month free.</span>
</Price>
