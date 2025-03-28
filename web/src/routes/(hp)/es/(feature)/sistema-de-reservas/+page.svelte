<script>
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import QuoteEsAmanda from "$components/quote-es-amanda.svelte";
    import QuoteEsJonas from "$components/quote-es-jonas.svelte";
    import QuoteEsJimmy from "$components/quote-es-jimmy.svelte";
    import QuoteEsSofia from "$components/quote-es-sofia.svelte";
    import StatsSectionEn from "$components/statsSectionEn.svelte";
    import ContactDanielEs from "$components/contactDanielEs.svelte";
    import PricesEs from "$components/pricesEs.svelte";
    import StatsSectionEs from "$components/stats-section-es.svelte";

</script>

<svelte:head>
    <title>Reservas en línea con todo lo que necesitas</title>
    <meta name="description" content="Sistema completo de reservas y pagos que hace que las reservas en línea para tus clientes sean súper fáciles. Kaddio también hace todo lo demás que esperas." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/cal-en.png" alt="Reservas en línea y calendario de Kaddio">
    <span slot="h1">Reservas en línea</span>
    <span slot="title">Kaddio Reservas</span>
    <span slot="sub">
        Kaddio Reservas es un sistema de calendario y reservas en uno. Gestiona reservas, clases grupales y reuniones en la misma vista y mantén todo bajo control.</span>

    <ModuleFeatureWithIcon icon="people-pants">
        <span slot="title">Colabora.</span>
        <span slot="body">
            Administra reservas de reuniones y salas para toda la organización.
        </span>
    </ModuleFeatureWithIcon>

    <ModuleFeatureWithIcon icon="stopwatch">
        <span slot="title">Optimiza.</span>
        <span slot="body">
            Crea plantillas para eventos recurrentes en el calendario y ahorra tiempo.
        </span>
    </ModuleFeatureWithIcon>

    <ModuleFeatureWithIcon icon="calendar-lines-pen">
        <span slot="title">Mejora el flujo de clientes.</span>
        <span slot="body">
            Crea horarios disponibles directamente desde tu calendario. Controla todo tú mismo o permite que los clientes reserven y paguen por su cuenta.
        </span>
    </ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
    
    <span slot="title">Esto es Kaddio Reservas</span>
    <span slot="body">Con Kaddio Reservas planificas las actividades de tu organización de manera eficiente y clara, ya sea que formes parte de una gran empresa o seas autónomo.</span>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Colabora</span>

        <ModuleOverviewFeature>Reservas de reuniones</ModuleOverviewFeature>
        <ModuleOverviewFeature>Soporte para operaciones en varias direcciones</ModuleOverviewFeature>
        <ModuleOverviewFeature>Reservas de salas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Calendario compartido dentro de la organización</ModuleOverviewFeature>
        <ModuleOverviewFeature>Listas de espera para clientes en cola</ModuleOverviewFeature>
    </ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Optimiza</span>

        <ModuleOverviewFeature>Calendario y reservas en la misma vista</ModuleOverviewFeature>
        <ModuleOverviewFeature>Pago con tarjeta al reservar</ModuleOverviewFeature>
        <ModuleOverviewFeature>Check-in</ModuleOverviewFeature>
        <ModuleOverviewFeature>Informes diarios</ModuleOverviewFeature>
        <ModuleOverviewFeature>Base de facturación automática</ModuleOverviewFeature>
        <ModuleOverviewFeature>Función de plantillas</ModuleOverviewFeature>
        
    </ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Mejora el flujo de clientes</span>

        <ModuleOverviewFeature>Reservas en el sitio web</ModuleOverviewFeature>
        <ModuleOverviewFeature>Integración con Kuralink</ModuleOverviewFeature>
        <ModuleOverviewFeature>Servicio de búsqueda Encuentra Clínica</ModuleOverviewFeature>
        <ModuleOverviewFeature>Reservas con BankID</ModuleOverviewFeature>
        <ModuleOverviewFeature>Recordatorios por correo electrónico y SMS</ModuleOverviewFeature>
        <ModuleOverviewFeature>Formularios al reservar</ModuleOverviewFeature>
        <ModuleOverviewFeature>Reservas grupales</ModuleOverviewFeature>
        <ModuleOverviewFeature>API</ModuleOverviewFeature>

    </ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Lo que nuestros clientes dicen sobre <br>Kaddio Reservas       
    </span>

    <QuoteEsJimmy />
    
    <QuoteEsJonas />

    <QuoteEsAmanda />

    <QuoteEsSofia />
    
</QuotesSection>

<StatsSectionEs />

<PricesEs></PricesEs>

<ContactDanielEs></ContactDanielEs>