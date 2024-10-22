<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<img class="max-h-12 w-full object-contain object-left" src={src} alt={alt} loading="lazy" width="105" height="48">
