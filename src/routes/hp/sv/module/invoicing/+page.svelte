<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../components/faqSection.svelte";
</script>

<ModuleSection>
	<span slot="title">Kaddio Fakturering</span>
	<span slot="sub">Kaddios Dokumentation / Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård.</span>

	<ModuleFeature>
		<span slot="title">Journal</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Journalformulär</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">ICD-10</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Advanced security.</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Kraftfullt API.</span>
		<span slot="body">
			Automatisera era flöden med Kaddio GraphQL API. Kaddio Journal finns åtkomlig för API
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Database backups.</span>
		<span slot="body">
			Kaddio tar kontinuerlig backup av allting i Kaddio, flera gånger per dygn. Säkerhetskopior lagras krypterat på geografiskt skiljda platser.
		</span>
	</ModuleFeature>
	
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funktioner</span>

	<Qa>
		<span slot="q">Anteckningsmallar</span>
		<span slot="a">
			Skapa dina egna mallar för journalanteckningar så de passar din verksamhet. Välj din egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer.
		</span>
	</Qa>
	
	<Qa>
		<span slot="q">Journalformulär</span>
		<span slot="a">
			Skapa dina egna formulär eller använd vanligt förekommande standardformulär direkt från Kaddio. Skicka skattningsformulär och hälsodeklarationer via e-post och sms. Journalformulär kan skickas automatiskt i samband med bokning eller manuellt vid behov. Svaren sparas i journalen.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Brev och remisser</span>
		<span slot="a">
			Skapa brev, remisser, remissvar och intyg. Skicka med post, via Kaddios chat eller ladda ner som PDF.
		</span>
	</Qa>

	<Qa>
		<span slot="q">ICD-10</span>
		<span slot="a">
			Sök med kod eller fritext och lägg till diagnoser i varje journalanteckning.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Behörigheter</span>
		<span slot="a">
			Välj om alla i verksamheten ska kunna läsa klienters journal eller om behörigheten ska begränsas till vissa behandlare.
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

</FaqSection>