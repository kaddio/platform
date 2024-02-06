<script lang="ts">
    export let stars: number;
    let emptyStars = 5 - stars;
    export let reverse = false;
</script>

<div class="flex gap-0.5 text-xs" class:flex-row-reverse={reverse}>
    {#each Array(stars) as _}
        <i class="fa-solid fa-star text-yellow-500" />
    {/each}
    {#each Array(emptyStars) as _}
        <i class="fa-solid fa-star text-gray-200" />
    {/each}
</div>
