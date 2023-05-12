<script lang="ts">
	import Card from "../../../../components/card.svelte";
	import type { PageData } from "./$types";
	import OrganizationCard from "./components/organizationCard.svelte";

    export let data: PageData;

</script>
<div class="bg-gray-100 p-6 flex gap-5 flex-wrap">


    {#each data.organizations as organization}
    <OrganizationCard organization={organization}></OrganizationCard>    
    {/each}
</div>