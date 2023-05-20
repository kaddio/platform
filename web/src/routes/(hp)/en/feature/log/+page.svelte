<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Medical Record</title>
	<meta name="description" content="Kaddio Medical Record is a complete module for documentation of your clients." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Medical Record</span>
	<span slot="sub">Kaddio Medical Record is a complete module for documentation of your clients.</span>

	<!-- <ModuleFeature>
		<span slot="title">Användarvänligt.</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature> -->

	<ModuleFeature>
		<span slot="title">Flexible.</span>
		<span slot="body">
			Browse through our medical record templates or tailor everything based on your needs
		</span>
	</ModuleFeature>

	<!-- <ModuleFeature>
		<span slot="title">Säkert.</span>
		<span slot="body">
			Behörighetsstyrning
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature> -->


	
</ModuleSection>
  

<FaqSection>
	<span slot="title">Details</span>

	<Qa>
		<span slot="q">Templates</span>
		<span slot="a">
			Create medical record templates tailored to your needs. Choose your own search phrases and titles.
		</span>
	</Qa>
	
	<Qa>
		<span slot="q">Medical record forms</span>
		<span slot="a">
			Create your own forms or use commonly used standard forms directly from Kaddio. Send assessment forms and health declarations via e-mail and SMS. Journal forms can be sent automatically when you get a new booking, or manually if necessary. The answers are saved in the journal.		</span>
	</Qa>

	<Qa>
		<span slot="q">Letters and referrals</span>
		<span slot="a">
			Create letters, referrals, referral responses and certificates. Send by post, via Kaddio Communication or download as PDF.		</span>
	</Qa>

	<Qa>
		<span slot="q">ICD-10</span>
		<span slot="a">
			Search by code or free text and add diagnoses to each journal entry.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Privileges</span>
		<span slot="a">
			Choose if everyone within your organization should be able to read a client's medical record or limit access to certain processors.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Bild</span>
		<span slot="a">
			Rita på fram- och baksida av en människokropp för att dokumentera till exempel var klienten upplever smärta.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Lista osignerade anteckningar</span>
		<span slot="a">
			Håll koll på anteckningar som väntar på att bli signerade.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Exportera/skriv ut</span>
		<span slot="a">
			Exportera och skriv ut enskild journalanteckning eller hela journalen till PDF.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Loggning</span>
		<span slot="a">
			Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>
	</Qa>

	<Qa>
		<span slot="q">API</span>
		<span slot="a">
			Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>
	</Qa>

</FaqSection>