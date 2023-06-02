<script lang="ts">
	import Card from "$components/card.svelte";
	import HelpArticleLink from "../help-article-link.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<header class="top-section hidden-print" >
</header>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Kom igång med Kaddio</h1>
        </div>
        <div class="links">
            <HelpArticleLink title="Skapa konto" href="allmänt/skapa-konto" iconClass="fa fa-user"></HelpArticleLink>
            <HelpArticleLink title="Journal" href="journal/kom-igång" iconClass="fa fa-file"></HelpArticleLink>
            <HelpArticleLink title="Bokning" href="bokning/kom-igång" iconClass="fa fa-calendar"></HelpArticleLink>
            <HelpArticleLink title="Fakturering" href="faktura/kom-igång" iconClass="fa fa-dollar"></HelpArticleLink>
        </div>
    </div>
        
    
    <h1>Lär dig mer om Kaddio</h1>
    { #each (data ? Object.entries(data.categories) : []) as [category, articles] } 
    <div class="row">
        <div class="col-md-6">
            <Card>
                <h4>{ category }</h4>
                {#each articles as article}
                    <a href="{article.path}">{article.title}</a>
                {/each}
            </Card>
        </div>
    </div>
{ /each}
<h1>Vanliga frågor</h1>

</div>

<style>
    .links {
        display: flex;
        gap: 1rem;
    }
</style>