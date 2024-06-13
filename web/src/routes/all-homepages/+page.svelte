<script lang="ts">
    export let data;
</script>

{#each data.urls as url}
    <a href="{url}" target="_blank">{url}</a><br />
{/each}