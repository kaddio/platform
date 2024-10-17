<script lang="ts">
	import { token } from '$lib/stores';
</script>

{#if $token?.testimonial}
    <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <figure class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
        <blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
            <p>“{$token.testimonial}”</p>
        </blockquote>
        <figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
            {#if $token.img}
                <img class="h-10 w-10 flex-none rounded-full bg-gray-50" src={$token.img} alt="">
            {/if}
            <div class="flex-auto">
                <div class="font-semibold">{$token.fullname}</div>

                <div class="text-gray-600">
                    {#if $token.title}
                        {$token.title}, 
                    {/if}
                    
                    {$token.orgName}
                </div>
            </div>
        </figcaption>
        </figure>
    </div>	
{/if}
