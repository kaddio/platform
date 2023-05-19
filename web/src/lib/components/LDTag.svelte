<script>
	import { serializeSchema } from '$lib/json-ld.js';
	
	export let schema;
</script>

<svelte:head>
	{@html serializeSchema(schema)}
</svelte:head>
