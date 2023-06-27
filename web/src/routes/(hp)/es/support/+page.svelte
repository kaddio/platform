<script lang="ts">	
	import { setContext } from 'svelte';
	import FaqSection from '$components/faqSection.svelte';
	import Qa from '$components/qa.svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	
	setContext('lang', 'es');
</script>

<svelte:head>
	<title>Kaddio - Support</title>
	<meta name="description" content="Kontakta Kaddio support" />
</svelte:head>

<Nav />

<SimpleCentered>
	<span slot="title">Contáctanos</span>
	<span slot="sub">Estamos aquí para ayudarte</span>

	<SimpleCenteredPiece icon="hands-holding-heart">
		<span slot="title">Centro de ayuda</span>
		<span slot="body">
			En el Centro de ayuda de Kaddio ayuda.kaddio.com, estamos actualizando continuamente los artículos y añadiendo respuestas a preguntas comunes.
		</span>
		<span slot="link">
			<a href="https://ayuda.kaddio.com" class="text-sm font-semibold leading-6 text-oldpink">ayuda.kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>	

	<SimpleCenteredPiece icon="envelope">
		<span slot="title">Correo electrónico</span>
		<span slot="body">
			Envía un correo electrónico a support@kaddio.com si tienes preguntas. Durante los días laborables de 9 a 15 horas, hacemos todo lo posible para responder en pocas horas. Durante los períodos de vacaciones, los tiempos de respuesta pueden ser más largos.
		</span>
		<span slot="link">
			<a href="mailto:support@kaddio.com" class="text-sm font-semibold leading-6 text-oldpink">support@kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>		


</SimpleCentered>

<Footer />