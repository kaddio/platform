<script lang="ts">
    export let src: string;
</script>

<li>
    <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="{src}" alt="">
    <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><slot name="title" /></h3>

    {#if $$slots.subtitle}
        <p class="text-base leading-7 text-gray-600"><slot name="subtitle" /></p>
    {/if}
    
    {#if $$slots.footer}
        <span class="mt-6 flex gap-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only"><slot name="footer" /></span>
                <slot name="footer" />
            </a>
        </span>
    {/if}

</li>

<style>
    img:hover {
        filter: sepia(30%) hue-rotate(340deg) saturate(50%) brightness(80%);
    }
</style>