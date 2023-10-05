<script lang="ts">
    import Card from '../../../../../components/card.svelte';
    import { imageHandler } from '../../../../../lib/img';

    export let keyword: string;
    export let imgUrl: string;

    const url = imageHandler(imgUrl, {
        width: 200,
        fit: 'crop'
    });
</script>

<h2 class=" font-semibold text-gray-600 mt-2 mb-2 ml-3">
    {keyword}
</h2>
<Card className="relative rounded-2xl aspect-video">
    <div
        class=" top-0 left-0 w-full h-full absolute purple-img"
        style="background-image: url({url}); background-size: cover; background-position: center"
    >
        &nbsp;
    </div>
</Card>
