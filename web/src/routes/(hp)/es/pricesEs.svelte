<script>
	import Price from "$components/price.svelte";

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
	<span slot="title">Solo paga por lo que usas</span>
	<span slot="sub">Sin cargo de inicio. 1 mes gratis.</span>
</Price>
