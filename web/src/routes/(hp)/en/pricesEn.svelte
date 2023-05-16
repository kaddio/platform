<script>
	import Price from "../components/price.svelte";

    const modules = [{
        name: "Core",
		price: 12,
		selected: true,
        disabled: true
    },
    {
		name: "Medical record",
		price: 9,
		selected: true
	},
    {
		name: "Time booking and calendar",
		price: 6,
		selected: true
	},
    {
		name: "Documents",
		price: 2
	},
    {
		name: "Invoicing",
		price: 6
	},
    {
		name: "Communication",
		price: 9
	},
    {
		name: "Homepage",
		price: 2
	},
    {
		name: "Tasks",
		price: 2
	}
]
</script>


<Price currency="EUR" modules="{modules}">
	<span slot="title">Only pay for what you use</span>
	<span slot="sub">No startup fee. 1 month free.</span>
</Price>
