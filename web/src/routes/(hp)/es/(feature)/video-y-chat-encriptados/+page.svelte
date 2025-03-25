<script>
    import ModuleSectionWithImage from '$components/moduleSectionWithImage.svelte';
    import ModuleFeatureWithIcon from '$components/moduleFeatureWithIcon.svelte';
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import QuoteEnJimmy from '$components/quoteEnJimmy.svelte';
    import QuoteEnJonas from '$components/quoteEnJonas.svelte';
    import QuoteEnSofia from '$components/quoteEnSofia.svelte';
    import QuoteEnRamzi from '$components/quoteEnRamzi.svelte';
    import StatsSectionEn from '$components/statsSectionEn.svelte';
    import PricesEn from '$components/pricesEn.svelte';
    import ContactDanielEn from '$components/contactDanielEn.svelte';
</script>

<svelte:head>
    <title>Kaddio - Comunicación</title>
    <meta name="description" content="Chat y video para hasta 500 participantes simultáneos" />
</svelte:head>


<ModuleSectionWithImage src="/img/kaddio-screenshots/chat-en.png" alt="Sistema de gestión de Kaddio">
    <span slot="h1">Comunicación</span>
    <span slot="title">Kaddio Chat y Video</span>
    <span slot="sub">
        Kaddio Chat y Video te permite comunicarte y compartir información de manera segura con clientes y colegas. Kaddio cumple con los requisitos de autenticación fuerte de la Agencia Nacional de Salud y Bienestar Social.
    </span>
	
    <ModuleFeatureWithIcon icon="comment">
        <span slot="title">Comunica.</span>
        <span slot="body">
            Videollamadas, chat y formularios de contacto en un entorno encriptado.
        </span>
    </ModuleFeatureWithIcon>

    <ModuleFeatureWithIcon icon="share">
        <span slot="title">Comparte información.</span>
        <span slot="body">
            Envía información sensible, archivos e imágenes a clientes y colegas de manera segura.
        </span>
    </ModuleFeatureWithIcon>

    <ModuleFeatureWithIcon icon="lock-keyhole">
        <span slot="title">Adapta la seguridad.</span>
        <span slot="body">
            Requiere inicio de sesión para videollamadas y chat con BankID Móvil o autenticación de dos factores.
        </span> 
    </ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
    <span slot="title">Esto es Kaddio Chat y Video</span>
    <span slot="body">Con Kaddio Chat y Video te comunicas de manera segura con clientes y colegas. 
        <br>Todo en Kaddio está encriptado.</span>
    
    <ModuleOverviewFeaturesSegment>
        <span slot="title">Comunica</span>
        <ModuleOverviewFeature>Videollamadas para 2-500 participantes</ModuleOverviewFeature>
        <ModuleOverviewFeature>Compartir pantalla en videollamadas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Chat con clientes y colegas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Chat grupal</ModuleOverviewFeature>
        <ModuleOverviewFeature>Correo electrónico al cliente desde el chat</ModuleOverviewFeature>
        <ModuleOverviewFeature>Formulario de contacto para clientes</ModuleOverviewFeature>
    </ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Comparte información</span>
        <ModuleOverviewFeature>
            Adjunta archivos, como notas de registro u otra información sensible.</ModuleOverviewFeature>
        <ModuleOverviewFeature>
            Formulario de consentimiento con función de firma</ModuleOverviewFeature>
        <ModuleOverviewFeature>Grabación de videollamadas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Envío automático de formularios desde el formulario de contacto</ModuleOverviewFeature>
    </ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Adapta la seguridad</span>
        <ModuleOverviewFeature>Cumple con los requisitos de autenticación fuerte de la Agencia Nacional de Salud y Bienestar Social</ModuleOverviewFeature>
        <ModuleOverviewFeature>Inicio de sesión para clientes con BankID Móvil</ModuleOverviewFeature>
        <ModuleOverviewFeature>Inicio de sesión para clientes con autenticación de dos factores vía SMS</ModuleOverviewFeature>
    </ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Lo que nuestros clientes dicen sobre <br>Kaddio Chat y Video       
    </span>
    <QuoteEnJimmy />
    <QuoteEnJonas/>
    <QuoteEnRamzi />
    <QuoteEnSofia />
    
</QuotesSection>

<StatsSectionEn />

<PricesEn />

<ContactDanielEn />