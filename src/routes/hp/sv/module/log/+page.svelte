<script>
	import ModuleSpecificFeature from "../../../components/moduleSpecificFeature.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";

</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
	  <div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kaddio Dokumentation</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">Kaddios Dokumentation / Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård.</p>
	  </div>
	  <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">

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
    
	  </dl>
	</div>
  </div>
  

<div class="bg-gray-900">
	<div class="mx-auto max-w-7xl divide-y divide-white/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
		<h2 class="text-2xl font-bold leading-10 tracking-tight text-white">Funktioner</h2>

		<dl class="mt-10 space-y-8 divide-y divide-white/10">
			<ModuleSpecificFeature>
				<span slot="q">Anteckningsmallar</span>
				<span slot="a">
					Skapa dina egna mallar för journalanteckningar så de passar din verksamhet. Välj din egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer.
				</span>
			</ModuleSpecificFeature>

			
			<ModuleSpecificFeature>
				<span slot="q">Journalformulär</span>
				<span slot="a">
					Skapa dina egna formulär eller använd vanligt förekommande standardformulär direkt från Kaddio. Skicka skattningsformulär och hälsodeklarationer via e-post och sms. Journalformulär kan skickas automatiskt i samband med bokning eller manuellt vid behov. Svaren sparas i journalen.
				</span>
			</ModuleSpecificFeature>

			<ModuleSpecificFeature>
				<span slot="q">Brev och remisser</span>
				<span slot="a">
					Skapa brev, remisser, remissvar och intyg. Skicka med post, via Kaddios chat eller ladda ner som PDF.
				</span>
			</ModuleSpecificFeature>

			<ModuleSpecificFeature>
				<span slot="q">ICD-10</span>
				<span slot="a">
					Sök med kod eller fritext och lägg till diagnoser i varje journalanteckning.
				</span>
			</ModuleSpecificFeature>

			<ModuleSpecificFeature>
				<span slot="q">Behörigheter</span>
				<span slot="a">
					Välj om alla i verksamheten ska kunna läsa klienters journal eller om behörigheten ska begränsas till vissa behandlare.
				</span>
			</ModuleSpecificFeature>

			<ModuleSpecificFeature>
				<span slot="q">Bild</span>
				<span slot="a">
					Rita på fram- och baksida av en människokropp för att dokumentera till exempel var klienten upplever smärta.
				</span>
			</ModuleSpecificFeature>

			<ModuleSpecificFeature>
				<span slot="q">Lista osignerade anteckningar</span>
				<span slot="a">
					Håll koll på anteckningar som väntar på att bli signerade.
				</span>
			</ModuleSpecificFeature>

			<ModuleSpecificFeature>
				<span slot="q">Exportera/skriv ut</span>
				<span slot="a">
					Exportera och skriv ut enskild journalanteckning eller hela journalen till PDF.
				</span>
			</ModuleSpecificFeature>

			<ModuleSpecificFeature>
				<span slot="q">Loggning</span>
				<span slot="a">
					Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
				</span>
			</ModuleSpecificFeature>

		</dl>
	</div>
</div>
  