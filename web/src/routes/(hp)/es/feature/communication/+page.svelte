<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Vídeo y chat encriptados</title>
	<meta name="description" content="Vídeo seguro hasta 500 participantes." />
</svelte:head>

<ModuleSection>
	<span slot="title">Vídeo y chat encriptados</span>
	<span slot="sub">Vídeo seguro hasta 500 participantes.</span>

	<!-- <ModuleFeature>
		<span slot="title">Automatisera</span>
		<span slot="body">
			Automatisera ditt schema och låt dina kunder boka och betala själva eller ta kontroll över varje minut. Bokningstyper kan konfigureras i detalj och detta hjälper dig sen i bokningen så att det blir lätt där. Automatiskta påminnelser
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Interagera</span>
		<span slot="body">
			Det är enkelt att byta till video..
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Och du kan växa med Kaddio</span>
		<span slot="body">
			Kaddio Video har stöd för minst 500 deltagare samtidigt.
		</span>
	</ModuleFeature> -->
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Vídeo</span>
		<span slot="a">
			Realiza videollamadas de hasta 100 participantes de forma simultánea. Permite compartir pantalla, levantar la mano, reacciones, fondos virtuales y más.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Chat</span>
		<span slot="a">
			Envía mensajes de chat de forma segura. Crea tus chats grupales.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Comparte archivos</span>
		<span slot="a">
			Comparte todo tipo de archivos de forma segura en el chat.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envía facturas</span>
		<span slot="a">
			Envía tus facturas directamente en el chat.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Correo electrónico desde el chat</span>
		<span slot="a">
			Envía mensajes de carácter no sensible directamente al correo electrónico de los clientes, desde el chat.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Kaddio Connect</span>
		<span slot="a">
			Comunícate de forma segura con diferentes organizaciones que estén utilizando Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Noticias</span>
		<span slot="a">
			Recibe notificaciones de mensajes por correo electrónico cuando no haya iniciado sesión en Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Formulario de contacto</span>
		<span slot="a">
			Crea formulario de contacto público para clientes.
		</span>
	</Qa>




</FaqSection>