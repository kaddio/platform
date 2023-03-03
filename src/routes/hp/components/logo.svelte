<script lang="ts">
    export let color: string;
</script>

{#if color == "black"}
    <a class="navbar-brand" id="heading" href="/" alt="">            
        <img src="/img/kaddio-svart.png" width="25">
    </a>
{:else}

<a class="navbar-brand" id="heading" href="/" alt="">            
    <img src="/img/kaddio-logo.png" width="25">
</a>
{/if}