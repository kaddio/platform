<script lang="ts">

	import ModulePresentation from './hp/components/modulePresentation.svelte';
	import Price from './hp/components/price.svelte';
	import Typed from './hp/components/typed.svelte';
	import Header from './hp/components/header.svelte';
	import Card from '../card.svelte';
	import QuoteCarousel from './hp/components/quoteCarousel.svelte';
	import Quote from './hp/components/quote.svelte';
	import Footer from './hp/components/footer.svelte';
	
	

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
<section id="features">
<ModulePresentation iconClass="mbri-file" href="/invoicing">
	<span slot="title">Journal</span>
	<span slot="body">Journal</span>
</ModulePresentation>
</section>


<section id="price">
	<Price currency="SEK" modules={modules}>

	</Price>
</section>

<section id="testimonials">
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

<Footer></Footer>

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
