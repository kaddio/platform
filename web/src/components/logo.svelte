<script lang="ts">
    import { imageHandler } from "$lib/img";

    export let color: string;
</script>

{#if color == "black"}
    <a class="navbar-brand" id="heading" href="/">            
        <img src={imageHandler("/img/kaddio-black.png", {format: "auto"})} alt="Kaddio Logotype in black" width="25">
    </a>
{:else}

    <a class="navbar-brand" id="heading" href="/">            
        <img src="/img/kaddio-logo.png"  alt="Kaddio Logotype in white" width="25">
    </a>
{/if}