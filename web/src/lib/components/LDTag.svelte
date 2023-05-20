<script lang="ts">
	import { serializeSchema } from '$lib/json-ld';
	import type { Schema } from '$lib/json-ld';
	
	export let schema: Schema;
</script>

<svelte:head>
	{@html serializeSchema(schema)}
</svelte:head>
