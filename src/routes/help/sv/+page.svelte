<script lang="ts">
	import Card from "../../../card.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div class="container">
{ #each (data ? Object.entries(data.categories) : []) as [category, articles] } 
    <Card class="col-md-6">
        <h4>{ category }</h4>
        {#each articles as article}
            {article.title}
        {/each}
    </Card>
{ /each}

</div>