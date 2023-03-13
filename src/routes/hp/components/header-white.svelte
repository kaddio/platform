<script lang="ts">
    import Nav from "../sv/navSv.svelte";
    export let color: string;
</script>

<header class="hidden-print">
    <Nav color={color}></Nav>
</header>

<style>
    
</style>