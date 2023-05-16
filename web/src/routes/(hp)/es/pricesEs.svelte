<script>
	import Price from "../components/price.svelte";

    const modules = [{
        name: "Core",
		price: 12,
		selected: true,
        disabled: true
    },
    {
		name: "Historia clinica",
		price: 9,
		selected: true
	},
    {
		name: "Time booking and calendar",
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
		name: "Pagina web",
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
