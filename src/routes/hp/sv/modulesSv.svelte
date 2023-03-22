<script>
  import ModulePresentation from "../components/modulePresentation.svelte";
</script>
	

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Kaddio</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ge(r) bättre hjälp</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">Kaddio är så enkelt att använda att du knappt behöver tänka när du använder det, den energi kan du lägga på t.ex. dina kunder. Genom att alla funktioner finns i samma enkla system slipper du trötta ut frontalloben i onödan. Din hjärna kommer att älska det.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        
        <ModulePresentation href="sv/module/log">
          <span slot="icon">
            <i class="text-white fa-regular fa-heart"></i>
          </span>
          <span slot="title">Dokumentation</span>
          <span slot="body">Flexibelt journalprogram som du själv anpassar efter din verksamhets behov.</span>
      </ModulePresentation>
      <ModulePresentation href="sv/module/cal">
          <span slot="icon">
            <i class="text-white fa-regular fa-stopwatch"></i>
        </span>
          <span slot="title">Tidsbokning och kalender</span>
          <span slot="body">Kalender för verksamhetens alla behov samt flexibel tidsbokning med kortbetalning. Gruppass och enkelpass.</span>
      </ModulePresentation>
  
      <ModulePresentation href="sv/module/invoicing">
            <span slot="icon">
                <i class="text-white fa-regular fa-file-lines"></i>
            </span>
            <span slot="title">Fakturering</span>
            <span slot="body">Fakturera klienter och företag utifrån bokade tider eller journalanteckningar</span>
      </ModulePresentation>
          
      <ModulePresentation href="sv/module/chat">
        <span slot="icon">
            <i class="text-white fa-regular fa-comments"></i>
        </span>
      <span slot="title">Video och chat</span>
          <span slot="body">Säker video för upp till 500 deltagare med skärmdelning, inspelning mm.</span>
      </ModulePresentation>
  
      <ModulePresentation href="sv/module/forms">
        <span slot="icon">
            <i class="text-white fa-regular fa-clipboard-list-check"></i>
        </span>
      <span slot="title">Formulär</span>
          <span slot="body">Skicka formulär och hälsodeklarationer till dina kunder, automatiskt och manuellt.</span>
      </ModulePresentation>
          
      <ModulePresentation href="/booking">
        <span slot="icon">
            <i class="text-white fa-regular fa-list-ul"></i>
        </span>
          <span slot="title">Uppgifter</span>
          <span slot="body">Skapa din egen ”Att göra-lista”. Delegera uppgifter till andra och få överblick över vad som ska göras.</span>
      </ModulePresentation>
                  
      <ModulePresentation href="/county-export">
        <span slot="icon">
            <i class="text-white fa-regular fa-folder-tree"></i>
        </span>
          <span slot="title">Dokument</span>
          <span slot="body">Filhanteringssystem med avancerad behörighetsstyrning, versionshantering och samarbetsverktyg.</span>
      </ModulePresentation>

      <ModulePresentation href="/county-export">
        <span slot="icon">
            <i class="text-white fa-regular fa-chart-line"></i>
        </span>
          <span slot="title">Rapporter</span>
          <span slot="body">Enkel tillgång och snabb insikt i din data</span>
      </ModulePresentation>
      </dl>
    </div>
  </div>
</div>

