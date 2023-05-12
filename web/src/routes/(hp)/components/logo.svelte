<script lang="ts">
    export let color: string;
</script>

{#if color == "black"}
    <a class="navbar-brand" id="heading" href="/">            
        <img src="/img/kaddio-svart.png" alt="Kaddio Logotype in black" width="25">
    </a>
{:else}

    <a class="navbar-brand" id="heading" href="/">            
        <img src="/img/kaddio-logo.png"  alt="Kaddio Logotype in white" width="25">
    </a>
{/if}