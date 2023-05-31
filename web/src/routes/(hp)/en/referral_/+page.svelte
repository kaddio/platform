<script lang="ts">
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	import { imageHandler } from '$lib/img';
    setContext('lang', 'en');
</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<Nav />

<div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56" aria-hidden="true">
        <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kaddio is recommended</h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">
            Kaddio is a web-based all-in-one system for health professionals that help others. Simple to use. You're going to love it.
        </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">

        <div class="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>Earn with the referral link. By using this link when you create an account you'll automatically earn credits.</p>
            <ul class="mt-8 max-w-xl space-y-8 text-gray-600">
            <li class="flex gap-x-3">
                1
                <span><strong class="font-semibold text-gray-900">Create account.</strong> Create your new account through this referral link.</span>
            </li>
            <li class="flex gap-x-3">
                2
                <span><strong class="font-semibold text-gray-900">Pay.</strong> Earn credits upon the first payment of your account.</span>
            </li>
            <!-- <li class="flex gap-x-3">
                3
                <span><strong class="font-semibold text-gray-900">Get awards.</strong> Redeem your credits for awards in the Kaddio Referral Shop.</span>
            </li> -->
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


<Footer />