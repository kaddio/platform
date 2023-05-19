<script lang="ts">
	import { websiteSchema } from "$lib/json-ld";
	import LdTag from "$lib/components/LDTag.svelte";
	import { json } from "@sveltejs/kit";

    export let data;
    let schema = websiteSchema;

    if(data.orgData){
        schema = {
            ...websiteSchema,
            name: "Kaddio ...",
            description: `This is Kadd`
        }
    }

</script>

<LdTag schema={schema}></LdTag>

<svelte:head>
	<title>Kaddio - {data.orgData}</title>
	<meta name="description" content="..." />
</svelte:head>


{@html JSON.stringify(data.orgData)}
