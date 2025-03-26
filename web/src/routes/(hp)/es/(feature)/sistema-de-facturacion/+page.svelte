<script>
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import PricesEs from "$components/pricesEs.svelte";
    import QuoteEsJimmy from "$components/quote-es-jimmy.svelte";
    import QuoteEsRamzi from "$components/quote-es-ramzi.svelte";
    import QuoteEsSofia from "$components/quote-es-sofia.svelte";
    import QuoteEsJonas from "$components/quote-es-jonas.svelte";
    import ContactDanielEs from "$components/contactDanielEs.svelte";
    import StatsSectionEs from "$components/stats-section-es.svelte";


</script>

<svelte:head>
    <title>Facturación para pequeñas y medianas empresas</title>
    <meta name="description" content="Kaddio Facturación es un programa de facturación completo para pequeñas y medianas empresas." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/invoice-en.png" alt="Facturación de Kaddio">
    <span slot="h1">Sistema de facturación</span>
    <span slot="title">Kaddio Facturación</span>
    <span slot="sub">
        Kaddio Facturación es un sistema de facturación sencillo para pequeñas y medianas empresas. Combínalo con Kaddio Reservas o Kaddio Sistema de Historias Clínicas para facturar de manera rápida y flexible.
    </span>

    <ModuleFeatureWithIcon icon="timer">
        <span slot="title">Ahorra tiempo.</span>
        <span slot="body">
            Genera facturas automáticamente a partir de reservas o notas de registro.
        </span>
    </ModuleFeatureWithIcon>

    <ModuleFeatureWithIcon icon="arrows-spin">
        <span slot="title">Automatiza.</span>
        <span slot="body">
            Deja que Kaddio gestione recordatorios y conciliaciones de pagos.
        </span>
    </ModuleFeatureWithIcon>

    <ModuleFeatureWithIcon icon="envelope">
        <span slot="title">Entrega.</span>
        <span slot="body">
            Envía facturas por correo electrónico, carta o en el chat. <br>Envía facturas electrónicas a empresas de todo el mundo.
        </span>
    </ModuleFeatureWithIcon>
    
</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
    
    <span slot="title">Esto es Kaddio Facturación</span>
    <span slot="body">Con Kaddio Facturación envías facturas fácilmente a partir de reservas o notas de registro. Gestiona todo en el mismo sistema y dedica más tiempo a tus clientes.</span>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Ahorra tiempo</span>
        <ModuleOverviewFeature>Duplicación de facturas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Base contable con exportación en SIE-4, CSV y para Excel</ModuleOverviewFeature>
        <ModuleOverviewFeature>Lista de clientes para empresas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Libro auxiliar de clientes</ModuleOverviewFeature>
        <ModuleOverviewFeature>Informes de ingresos</ModuleOverviewFeature>
                
    </ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Automatiza</span>

        <ModuleOverviewFeature>Facturas a partir de reservas o notas de registro</ModuleOverviewFeature>
        <ModuleOverviewFeature>Conciliación de pagos con Bankgirot o cuenta bancaria</ModuleOverviewFeature>
        <ModuleOverviewFeature>Recordatorios de pago</ModuleOverviewFeature>
        <ModuleOverviewFeature>Clasificación para exportación a cobranzas</ModuleOverviewFeature>
                
    </ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Entrega</span>
        <ModuleOverviewFeature>Facturación por correo electrónico, carta y chat</ModuleOverviewFeature>
        <ModuleOverviewFeature>Facturación electrónica a empresas de todo el mundo</ModuleOverviewFeature>
        <ModuleOverviewFeature>Factura consolidada para clientes empresariales</ModuleOverviewFeature>


    </ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Lo que nuestros clientes dicen sobre Kaddio Facturación       
    </span>

    <QuoteEsJimmy  />
    <QuoteEsJonas />
    <QuoteEsRamzi />
    <QuoteEsSofia />
</QuotesSection>

<StatsSectionEs />

<PricesEs />

<ContactDanielEs />