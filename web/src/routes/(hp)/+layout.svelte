<script>
    import LdTag from '$lib/components/LDTag.svelte';
    import { kaddioOrgSchema } from '$lib/json-ld';
	import '/src/app.css';

</script>

<LdTag schema={kaddioOrgSchema} />

<slot />

