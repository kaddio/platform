<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Time booking and calendar</title>
	<meta name="description" content="Easy-to-use time booking and online payment that does everything you expect." />
</svelte:head>

<ModuleSection>
	<span slot="title">Time booking and calendar</span>
	<span slot="sub">Easy-to-use time booking and online payment that does everything you expect.</span>

	<ModuleFeature>
		<span slot="title">Automate</span>
		<span slot="body">
			Automate you schedule and let your clients book and pay, or take meticulous control. Booking types can be configured in detail.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Collaborate</span>
		<span slot="body">
			Use the calendar to book meetings
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Streamline</span>
		<span slot="body">
			Streamline recurring events can be streamlined with templates.
	</ModuleFeature>
</ModuleSection>
  

<FaqSection>
	<span slot="title">Details</span>

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
			Välj om och när SMS-påminnelser skickas inför och efter bokade tid.
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