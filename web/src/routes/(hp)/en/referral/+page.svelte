<script lang="ts">
	import { setContext } from 'svelte';
	import { token } from '$lib/stores';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	import { imageHandler } from '$lib/img';
    setContext('lang', 'en');
</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<Nav />

{#if $token}
    <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56" aria-hidden="true">
        <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
        <p class="text-lg font-semibold leading-8 tracking-tight text-oldpink">Kaddio</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recommended by {$token.firstname}</h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">
            Kaddio is a web-based all-in-one system for health professionals that help others. Simple to use. You're going to love it.
        </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
        <div class="relative lg:order-last lg:col-span-5">
            <svg class="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]" aria-hidden="true">
            <defs>
                <pattern id="e87443c8-56e4-4c20-9111-55b82fa704e3" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
            </svg>
            <figure class="border-l border-oldpink pl-8">
            {#if $token?.testimonial}
                <blockquote class="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>“{$token.testimonial}”</p>
                </blockquote>
            {/if}

            <figcaption class="mt-8 flex gap-x-4">
                {#if $token.img}
                    <img src="{imageHandler($token.img, {format: 'auto'})}" alt="An image of {$token.fullname}" class="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50">
                {/if}

                <div class="text-sm leading-6">
                <div class="font-semibold text-gray-900">{$token.fullname}</div>
                <div class="text-gray-600">{$token.title || 'Kaddio user'}, {$token.orgName}</div>
                </div>
            </figcaption>

            </figure>
        </div>

        <div class="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>Earn with {$token.firstname}'s referral. Genom att använda dig av denna länk från {$token.firstname} när du skapar konto så får du automatiskt krediter som du kan använda i Kaddio rekommendationsbutik.</p>
            <ul class="mt-8 max-w-xl space-y-8 text-gray-600">
            <li class="flex gap-x-3">
                1
                <span><strong class="font-semibold text-gray-900">Create account.</strong> Create account through {$token.firstname}'s referral link.</span>
            </li>
            <li class="flex gap-x-3">
                2
                <span><strong class="font-semibold text-gray-900">Pay.</strong> Earn credits upon upon the first payment of your account.</span>
            </li>
            <li class="flex gap-x-3">
                3
                <span><strong class="font-semibold text-gray-900">Get awards.</strong> Redeem your credits for awards<!--- in the Kaddio Referral Shop-->.</span>
            </li>
            </ul>
            <!-- <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p> -->

            <div class="mt-8 flex items-center gap-x-6">
                <a href="/en/create" class="rounded-md bg-oldpink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Create account</a>
                <a href="/en" class="text-sm font-semibold text-gray-900">Learn more about Kaddio <span aria-hidden="true">&rarr;</span></a>
            </div>

        </div>
        
        </div>
    </div>
    </div>
  
{/if}



<Footer />