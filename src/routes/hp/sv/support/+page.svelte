<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '../footerSv.svelte';
	import HeaderWhite from '../../components/header-white.svelte';
	import Nav from '../navSv.svelte';
	
	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeaderWhite>
	<Nav color="black" />
</HeaderWhite>

<main>
	<h1 class="jumbotron">Kontakta oss</h1>

	<section class="jumbotron row">
		<div class="col-sm-3">
			<h3>Bli kund</h3>
		</div>
		<div class="col-sm-9">
			<p>
				<a href="https://support.kaddio.com/booking" target="_blank" rel="noreferrer">Boka in en tid</a> så ringer vi upp dig!
			</p>
		</div>
	</section>

	<section class="jumbotron row">


		<div class="col-sm-3">
			<h3>Hjälpcenter</h3>
		</div>
		<div class="col-sm-9">
			<p>
				I Kaddios Hjälpcenter <a target="_blank" rel="noreferrer" href="https://help.kaddio.com/help">help.kaddio.com</a> fyller vi kontinuerligt på med artiklar och svar på vanliga frågor.
			</p>
		</div>
	</section>

	<section class="jumbotron row">
		<div class="col-sm-3">
			<h3>E-post</h3>
		</div>
		<div class="col-sm-9">
			<p>
				Maila <a href="mailto:support@kaddio.com">support@kaddio.com</a> för frågor. Under vardagar 9-15 gör vi vårt bästa för att svara dig inom några timmar. Under semestertider kan svarstiderna vara längre.
			</p>
		</div>			
	</section>

</main>


<Footer />

<style>
	h1{
		text-align: center;
	}

	h3{
		margin-top: 0;
	}
</style>
