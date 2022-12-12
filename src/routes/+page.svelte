<script lang="ts">

	import ModulePresentation from '../components/b2b/modulePresentation.svelte';
	import Price from '../components/b2b/price.svelte';
	import Typed from '../components/b2b/typed.svelte';
	import Header from '../components/b2b/header.svelte';
	import Card from '../card.svelte';
	import QuoteCarousel from '../components/b2b/quoteCarousel.svelte';
	import Quote from '../components/b2b/quote.svelte';
	
	

	const modules = [{
		name: "Journal",
		price: 10,
		selected: true
	}]

	const strings = [
		"",
		"För dig som stjälper andra"
	]

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Header></Header>
<section>
<ModulePresentation iconClass="mbri-file" href="/invoicing">
	<span slot="title">Journal</span>
	<span slot="body">Journal</span>
</ModulePresentation>
<Typed>
	<p>För dig som hjälper andra</p>
	<p>För dig som stjälfper andra</p>
</Typed>
<Card> wehfjkl</Card>

	<Price currency="SEK" modules={modules}>

	</Price>

	<QuoteCarousel>
		<Quote>
			GHJKLÖ
			<slot name="quoted">
				Anders hejsan
			</slot>
		</Quote>
		<Quote>
			GHJKefwefwef
			<slot name="quoted">
				Anders hwegweg
			</slot>
		</Quote>
	</QuoteCarousel>
</section>


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
