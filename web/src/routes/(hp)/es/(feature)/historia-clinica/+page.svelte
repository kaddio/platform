<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
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

	<title>Kaddio - Historia clínica</title>
	<meta name="description" content="Kaddio es un software de gestión online adaptable a cualquier volumen de clínica. Desde los centros pequeños hasta las clínicas interdisciplinares de mayor tamaño, está diseñado para ser fácil de usar. Adapta tanto el contenido como la funcionalidad a tus necesidades." />
</svelte:head>

<!-- <ModuleSection>
	<span slot="title">Historia clínica</span>
	<span slot="sub">Kaddio es un software de gestión online adaptable a cualquier volumen de clínica. Desde los centros pequeños hasta las clínicas interdisciplinarias de mayor tamaño, está diseñado para ser fácil de usar. Adapta tanto el contenido como la funcionalidad a tus necesidades.</span>

	<ModuleFeature>
		<span slot="title">Användarvänligt.</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Flexibelt.</span>
		<span slot="body">
			Använd Kaddios egna mallar för anteckningar och rubriker eller skräddarsy allt efter verksamhetens behov.
Använd Kaddios egna mallar för anteckningar och rubriker eller skräddarsy allt efter verksamhetens behov. Skapa egna mallar för journalanteckningar utifrån dina behov och din verksamhet. Välj egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Säkert.</span>
		<span slot="body">
			Behörighetsstyrning
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>
</ModuleSection> -->

<ModuleSectionWithImage src="/img/kaddio-screenshots/historia-clinica-es.png" alt="Kaddio Hístoria clinica">
	<span slot="h1">Historia clínica</span>
	<span slot="title">Kaddio Historia clínica</span>
	<span slot="sub">
		Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård helt enkelt.
	</span>

	<ModuleFeatureWithIcon icon="pen">
		<span slot="title">Dokumentera.</span>
		<span slot="body">
			Journalför på ett säkert sätt, där och när du vill. Slipp pappershantering, pärmar och backup.
		</span> 
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="sliders">
		<span slot="title">Anpassa.</span>
		<span slot="body">
			Utforma mallar för journalanteckningar utifrån verksamhetens behov. 
			<!-- Spara tid genom att sätta upp mallar med malltexter, lägg in egna bilder att rita på samt egna kortkommandon för dina vanliga fraser. -->
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="gamepad-modern">
		<span slot="title">Kontrollera.</span>
		<span slot="body">
			Styr åtkomst till klienter och journaler. Du bestämmer själv vem som kommer åt vad.
			<!-- Följ aktivitet i journaler genom Kaddios log för spårbarhet och regelefterlevnad. -->
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<ProductFeatureImageOnLeft src="/img/silvia-at-desk.png" alt="Silvia Triay at desk">
	<span slot="pre">Silvia Tiray, osteopat @ Osteopatía Mallorca, Spanien</span>
	<span slot="title">Därför använder Silvia <br>Kaddio Journal</span>
	<span slot="body"><cite>"Kaddio passar vårt sätt att arbeta med osteopatiska konsultationer och är enkelt att använda, även om man inte kan så mycket om datorer. Du kan börja använda systemet direkt. Det finns mallar för journalföring och jag kan redigera mallarna så att de fungerar för den typ av patienter som jag möter i mitt arbete. Det är väldigt viktigt för mig. 
		<br> 
		<br>Jag använder Kaddio för att organisera mina journalanteckningar och patientbesök bättre, och framför allt för att få mer tid till mina hobbies och min familj. Jag kan njuta mer av min fritid."</cite>
		<br>
		<br><a href="/sv/case/osteopatia-mallorca" class="font-semibold text-oldpink">Se mer om Silvias resa från analog till digital journalföring →</a>
	</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Journal</span>
	<span slot="body">Med Kaddio Journal journalför du säkert och smidigt på det sätt som passar din verksamhet. Kaddio sköter datalagringen. Du får tid över till annat.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dokumentera</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->

		<ModuleOverviewFeature>Krypterad journalföring</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bilder med ritfunktion</ModuleOverviewFeature>
		<ModuleOverviewFeature>Filuppladdning i journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Diagnoser enligt ICD-10</ModuleOverviewFeature>
		<ModuleOverviewFeature>Standardformulär direkt i journalen</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export av journal eller enskilda anteckning som PDF</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Anpassa</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Fri utformning av anteckningsmallar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för malltext</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för fraser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Uppladdning av egna bilder att rita på</ModuleOverviewFeature>
		<ModuleOverviewFeature>Fri utformning av egna formulär</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Kontrollera</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Behörighetsstyrning för journaler</ModuleOverviewFeature>
		<ModuleOverviewFeature>Signering och redigering av anteckningar med full historik</ModuleOverviewFeature>
		<ModuleOverviewFeature>Listning av osignerade anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Logg öven läsning och redigering av journaler</ModuleOverviewFeature>
		

	</ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection> 

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Journalmodulen       
    </span>

    <Quote>
        Här vill man ha citat som rör just Journal.
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
</StatsSection>

  

<!-- <FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Plantillas de notas</span>
		<span slot="a">
			Crea tus propias plantillas para que las historias clínicas se adapten a tu negocio. Elige tus propias palabras clave/títulos. Usa plantillas de texto, frases, carga de archivos y más.
		</span>
	</Qa>
	
	<Qa>
		<span slot="q">Formularios</span>
		<span slot="a">
			Crea tus propios formularios o utiliza formularios estándar de uso común directamente desde Kaddio. Envía formularios de valoración y declaraciones de salud correo electrónico y SMS. Los formularios se pueden enviar automáticamente en relación con la reserva o manualmente si es necesario. Las respuestas se guardan en la historia clínica.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Cartas y remisiones</span>
		<span slot="a">
			Crea cartas, remisiones y certificados. Envíalos por correo postal, a través del chat de Kaddio o como PDF.
		</span>
	</Qa>

	<Qa>
		<span slot="q">ICD-10</span>
		<span slot="a">
			Busca por código o texto libre y agrega diagnósticos a cada historia clínica.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Control en la seguridad de las historias clínicas</span>
		<span slot="a">
			Elige quiénes pueden leer el historial médico del paciente.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Gráficas del cuerpo humano</span>
		<span slot="a">
			Haz dibujos en las gráficas corporales para documentar, por ejemplo, dónde experimenta dolor el paciente.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Mantenimiento de registros</span>
		<span slot="a">
			Mantén un registro de las notas que esperan ser firmadas.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Exportación de historias clínicas</span>
		<span slot="a">
			Exporta partes individuales o una historia clínica completa a PDF.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Registro de eventos</span>
		<span slot="a">
			Se registran la lectura, escritura y edición de las historias clínicas. El registro muestra lo que se hizo con una historia clínica en particular y por quién, cuándo y desde qué dirección IP.
		</span>
	</Qa>


</FaqSection> -->