<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
	import ModuleSectionWithImage from '$components/moduleSectionWithImage.svelte';
    import ModuleFeatureWithIcon from '$components/moduleFeatureWithIcon.svelte';
    import ModuleFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import ProductFeatureImageOnLeft from "$components/productFeatureImageOnLeft.svelte";
    import Quote from "$components/quote.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import ProductPricingSection from "$components/productPricingSection.svelte";
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";
    import StatsSectionWithText from "$components/statsSectionWithText.svelte";
    import StatsSectionWithTextPart from "$components/statsSectionWithTextPart.svelte";
</script>

<svelte:head>
    <meta name="robots" content="noindex">

    <title>Kaddio - Vídeo y chat encriptados</title>
    <meta name="description" content="Vídeo seguro hasta 500 participantes." />
</svelte:head>

<!-- <ModuleSectionWithImage src="/img/kaddio-screenshots/chat-es.png" alt="Kaddio Chat">
	<span slot="h1">Vídeo y chat encriptados</span>
	<span slot="title">Kaddio Vídeo y chat encriptados</span>
	<span slot="sub">
		Kaddio Chat och Video gör att du kan kommunicera och dela information säkert med klienter och kollegor. Kaddio uppfyller Socialstyrelsens krav på stark autentisering.
	</span>

	<ModuleFeatureWithIcon icon="lock">
		<span slot="title">Säkerhetsanpassa.</span>
		<span slot="body">
			Kräv inloggning till videosamtal och chat med Mobilt BankID eller
            tvåfaktorsautentisering.
		</span> 
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">Dela information.</span>
		<span slot="body">
			Skicka känslig information på ett säkert sätt genom krypterad chat och videosamtal.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="seedling">
		<span slot="title">Väx med Kaddio.</span>
		<span slot="body">
			Håll enskilda samtal eller stora föreläsningar. Kaddio Video har stöd för minst 500
            deltagare samtidigt.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Inspirerande text och bild</span>
	<span slot="title">Därför använder X Kaddio Chat och Video</span>
	<span slot="body">Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Chat och Video</span>
	<span slot="body">Med Kaddio Chat och Video kommunicerar du säkert med klienter och kollegor. <br>Allt i Kaddio är krypterat.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Säkerhetsanpassa</span>
		<span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span>
        <ModuleOverviewFeature>Uppfyller Socialstyrelsens krav på stark autentisering</ModuleOverviewFeature>
        <ModuleOverviewFeature>Inloggning för klient med Mobilt BankID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inloggning för utländska klienter med tvåfaktorsautentisering via SMS</ModuleOverviewFeature>
        <ModuleOverviewFeature>Kryptering av all information</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dela information</span>
		<span slot="body">Funktioner för göra samarbetet smidigare</span>

		<ModuleOverviewFeature>Krypterad fildelning i chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skärmdelning i videosamtal</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inspelning av videosamtal för delning med klient i chat</ModuleOverviewFeature>
        <ModuleOverviewFeature>Kontaktformulär för klient</ModuleOverviewFeature>
    </ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Väx med Kaddio</span>
		<span slot="body">Funktioner för att spara tid</span>

		<ModuleOverviewFeature>Videosamtal för 2-500 deltagare</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Kaddio Chat och Video       
    </span>

    <Quote>
        Här vill man ha citat som rör just Kommunikation.
        <span slot="quoted">
            Förnamn Efternamn <cite>Titel  <a href="https://webadress.se" target="_blank" rel="noreferrer">Webadress</a></cite>
        </span>
    </Quote>
   
</QuotesSection>

<ProductPricingSection></ProductPricingSection>

<StatsSectionWithText>
    <StatsSectionWithTextPart>
		<span slot="title">användare</span>
		<span slot="sub">47 000+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">bokningar per dygn</span>
		<span slot="sub">1300+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">videomöten per månad</span>
		<span slot="sub">8500+</span>
    </StatsSectionWithTextPart>
</StatsSectionWithText>

<StatsSection>
	<StatsSectionPart>
		<span slot="title">användare</span>
		<span slot="sub">47 000+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">bokningar per dygn</span>
		<span slot="sub">1300+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">videomöten per månad</span>
		<span slot="sub">8500+</span>
	</StatsSectionPart>
</StatsSection> -->

<!-- <svelte:head>
	<title>Kaddio - Vídeo y chat encriptados</title>
	<meta name="description" content="Vídeo seguro hasta 500 participantes." />
</svelte:head> -->

<ModuleSection>
	<span slot="title">Vídeo y chat encriptados</span>
	<span slot="sub">Vídeo seguro hasta 500 participantes.</span>

</ModuleSection>
  
<FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Vídeo</span>
		<span slot="a">
			Realiza videollamadas de hasta 500 participantes de forma simultánea. Permite compartir pantalla, levantar la mano, reacciones, fondos virtuales y más.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Chat</span>
		<span slot="a">
			Envía mensajes de chat de forma segura. Crea tus chats grupales.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Archivos compartidos</span>
		<span slot="a">
			Comparte todo tipo de archivos de forma segura en el chat.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envío de facturas</span>
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
			Recibe notificaciones de mensajes por correo electrónico cuando no hayas iniciado sesión en Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Formulario de contacto</span>
		<span slot="a">
			Crea un formulario de contacto público para clientes.
		</span>
	</Qa>




</FaqSection>