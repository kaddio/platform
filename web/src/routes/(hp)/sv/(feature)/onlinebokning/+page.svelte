<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
</script>

<svelte:head>
	<title>Onlinebokning med allt du behöver</title>
	<meta name="description" content="Komplett bokningssystem och betalning som gör onlinebokningen för dina klienter supersmidig, Kaddio gör även allt annat du förväntar dig." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/cal-se.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">Onlinebokning</span>
	<span slot="title">Kaddio Kalender och Tidsbokning</span>
	<span slot="sub">
		Komplett bokningssystem och betalning som gör onlinebokningen för dina klienter supersmidig, Kaddio gör även allt annat du förväntar dig. I Kaddio är kalendern även din publika bokning så att du enkelt kan hantera bokningsbara tider, möten och grupppass i samma vy.</span>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Planera</span>
		<span slot="body">
			Skapa bokningsbara tider direkt från din kalender. Konfigurera dina bokningstyper i detalj. Välj om dina kunder bokar och betalar själva eller om du tar kontroll över varje minut. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="people-pulling">
		<span slot="title">Samarbeta</span>
		<span slot="body">
			Använd kalendern för att boka möten och välj enkelt vilka som ska vara med. Bestäm själv vilka kollegor som ska se vad.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Effektivisera</span>
		<span slot="body">
			Har du återkommande händelser i kalendern? Skapa mallar och spara tid. 
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>
  

<FaqSection>
	<span slot="title">Detaljer</span>

	<Qa>
		<span slot="q">Kalender</span>
		<span slot="a">
			Administrera bokningar i kalendern, till exempel ändra eller avboka tid. I kalendern ser du bokningar sida vid sida med möten och andra aktiviteter.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Öppen klientbokning</span>
		<span slot="a">
			Klienten bokar tid själv på en publik websida.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Bokning med Mobilt BankID</span>
		<span slot="a">
			Klienten loggar in i Kaddio med Mobilt BankID för att kunna boka tid. Passar dig som vill säkerställa identiteten på den som bokar.
		</span>
	</Qa>

	<Qa>
		<span slot="q">SMS-påminnelser</span>
		<span slot="a">
			Välj om och när SMS-påminnelser skickas inför och efter bokade tider.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Formulär</span>
		<span slot="a">
			Skicka formulär automatiskt i samband med bokning, till exempel skattningsformulär och hälsodeklaration.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Behandlingsformer</span>
		<span slot="a">
			Erbjud olika typer av behandlingsformer. Koppla behandlingsformer till olika behandlare. Anpassa sms och mailutskick beroende på behandling.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Gruppbokning</span>
		<span slot="a">
			Lägg upp tider som är bokningsbara för fler än en deltagare.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Tidsoptimering</span>
		<span slot="a">
			Undvik onödiga hål i schemat. Kaddio optimerar bokningsbara tider utifrån behandlingformernas längd.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Väntelistor</span>
		<span slot="a">
			Skapa väntelistor med datum, anteckningar och delegeringsfunktion.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Kortbetalning vid bokning</span>
		<span slot="a">
			Låt klienten betala med kort direkt vid bokning online.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Fakturering</span>
		<span slot="a">
			Automatiska faktureringsunderlag skapas utifrån bokningar.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Visa bokning på din hemsida</span>
		<span slot="a">
			Integrera bokning direkt på din hemsida.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Platser</span>
		<span slot="a">
			Kaddio har stöd för om du har mottagningar på flera platser. Information i mail och sms-påminnelser anpassas beroende på plats.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Rumsbokning</span>
		<span slot="a">
			Schemaläggning för dina rum. Kaddio ser till att behandlingar bara bokas in när det finns tillgängliga rum.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Personalliggare</span>
		<span slot="a">
			Kaddio kan användas som digital personalliggare genom Arbetstid i Kalendern, med hjälp av Loggning uppfylls även Skatteverkets regler kring kontroll.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Loggning</span>
		<span slot="a">
			Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>
	</Qa>

</FaqSection>