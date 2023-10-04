<script lang="ts">
    import Card from '../../../../../components/card.svelte';

    export let keyword: string;
    export let imgUrl: string;
    console.log(imgUrl);
</script>

<h2 class=" font-semibold text-gray-600 mt-2 mb-2 ml-3">
    {keyword}
</h2>
<Card className="relative h-48 rounded-2xl">
    <div
        class=" top-0 left-0 w-full h-full absolute purple-img"
        style="background-image: url({imgUrl}); background-size: cover; background-position: center"
    >
        &nbsp;
    </div>
</Card>
