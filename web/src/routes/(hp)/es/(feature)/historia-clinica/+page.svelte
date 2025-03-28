<script>
    import ContactDanielEs from "$components/contactDanielEs.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";


    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import PricesEs from "$components/pricesEs.svelte";
    import QuoteEsAmanda from "$components/quote-es-amanda.svelte";
    import QuoteEsJimmy from "$components/quote-es-jimmy.svelte";
    import QuoteEsJonas from "$components/quote-es-jonas.svelte";
    import QuoteEsRamzi from "$components/quote-es-ramzi.svelte";
    import QuoteEsSofia from "$components/quote-es-sofia.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import StatsSectionEs from "$components/stats-section-es.svelte";

</script>
<ModuleSectionWithImage src="/img/kaddio-screenshots/medical-record-overview-en.png" alt="Sistema de registros Kaddio">
    <span slot="h1">Sistema de registros</span>
    <span slot="title">Kaddio Journal</span>
    <span slot="sub">
        Kaddio Journal tiene todo lo que necesitas para registrar clientes y documentar tu negocio. 
        Un sistema de registros completo, simplemente.
    </span>

    <ModuleFeatureWithIcon icon="pen">
        <span slot="title">Documenta.</span>
        <span slot="body">
            Registra de manera segura, donde y cuando quieras. Diseña plantillas para notas de registro según las necesidades de tu negocio.
        </span> 
    </ModuleFeatureWithIcon>

    <ModuleFeatureWithIcon icon="sliders">
        <span slot="title">Haz seguimiento.</span>
        <span slot="body">
            Envía cartas y remisiones. Automatiza el envío y la recopilación de formularios. Todo está almacenado en el registro.
        </span>
    </ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="title">Este es Kaddio Journal</span>
	<span slot="body">Con Kaddio Journal registras de manera segura y eficiente de la forma que mejor se adapte a tu negocio. Gestiona todo en el mismo sistema y gana tiempo para otras cosas.</span>

	<ModuleOverviewFeaturesSegment>
        <span slot="title">Documenta</span>
        
        <ModuleOverviewFeature>Diseño libre de plantillas de notas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Soporte para texto de plantilla y frases</ModuleOverviewFeature>
        <ModuleOverviewFeature>Subida de imágenes propias para dibujar</ModuleOverviewFeature>
        <ModuleOverviewFeature>Subida de archivos en notas de registro</ModuleOverviewFeature>
        <ModuleOverviewFeature>Diagnósticos según ICD-10</ModuleOverviewFeature>
        <ModuleOverviewFeature>Formularios estándar directamente en el registro</ModuleOverviewFeature>
        <ModuleOverviewFeature>Construye tus propios formularios</ModuleOverviewFeature>
        <ModuleOverviewFeature>API</ModuleOverviewFeature>
        <ModuleOverviewFeature><a href="/sv/1177" class="text-sm leading-6 text-oldpink">1177 (primavera 2025) <span aria-hidden="true">&rarr;</span></a></ModuleOverviewFeature>
        
    </ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Haz seguimiento</span>

        <ModuleOverviewFeature>Envío y recopilación automatizada de formularios</ModuleOverviewFeature>
        <ModuleOverviewFeature>Remisiones por correo, correo electrónico y chat</ModuleOverviewFeature>
        <ModuleOverviewFeature>Exportación de notas de registro como PDF</ModuleOverviewFeature>
        <ModuleOverviewFeature>Resumen de reservas, facturas y tareas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Facturación consolidada</ModuleOverviewFeature>
        
    </ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
        <span slot="title">Garantiza</span>
        
        <ModuleOverviewFeature>Registro encriptado</ModuleOverviewFeature>
        <ModuleOverviewFeature>Control de acceso a los registros</ModuleOverviewFeature>
        <ModuleOverviewFeature>Firma de notas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Historial de edición de notas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Listado de notas no firmadas</ModuleOverviewFeature>
        <ModuleOverviewFeature>Registro de lectura y edición de registros</ModuleOverviewFeature>
    </ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection> 

<QuotesSection>
    <span slot="title">
        Lo que nuestros clientes dicen sobre Kaddio Journal      
    </span>

	<QuoteEsRamzi />
	<QuoteEsJimmy />
	<QuoteEsJonas />
	<QuoteEsAmanda />
	<QuoteEsSofia />
</QuotesSection>

<StatsSectionEs />

<PricesEs />


<ContactDanielEs />