<script lang="ts">
    export let stars: number;
    let emptyStars = 5 - stars;
</script>

<div class="flex gap-1">
    {#each Array(stars) as _}
        <i class="fa-solid fa-star text-yellow-500"></i>
    {/each}
    {#each Array(emptyStars) as _}
        <i class="fa-solid fa-star text-gray-500"></i>
    {/each}
</div>