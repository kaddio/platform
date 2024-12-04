<script lang="ts">	
	import { setContext } from 'svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';

	setContext('lang', 'en');
	const defaultPath = "http://localhost:3000/iframe/booking"
	let url = defaultPath;
	let height = "100%";

</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<Nav />

<SimpleCentered>
	<span slot="title">Test of iframe</span>
	<span slot="sub">Use this page to test how an iframe will behave when pointed at an URL. After you update "height", you must trigger a src reload by updating the URL-field.</span>

		<div class="rounded-md shadow-sm sm:col-span-2">
			<label for="url" class="block text-sm font-semibold leading-6 text-gray-900"
				>URL</label
			>
			<div class="mt-2.5 flex">
				<input
					type="text"
					bind:value={url}
					name="url"
					id="url"
					autocomplete="url"
					class="block w-full min-w-0 flex-1 rounded-md rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6"
				/>
			</div>
		</div>

		<div class="rounded-md shadow-sm sm:col-span-2">
			<label for="height" class="block text-sm font-semibold leading-6 text-gray-900"
				>Height</label
			>
			<div class="mt-2.5 flex">
				<input
					type="text"
					bind:value={height}
					name="height"
					id="height"
					autocomplete="url"
					class="block w-full min-w-0 flex-1 rounded-md rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		
	<iframe src={url} style="border: 0" width="100%" height={height} frameborder="0" scrolling="yes"></iframe>
</SimpleCentered>

<Footer />