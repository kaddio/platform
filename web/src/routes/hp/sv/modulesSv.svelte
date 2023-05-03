<script>
  import ModulePresentation from "../components/modulePresentation.svelte";
</script>
	

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-purple-600">Kaddio</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gör som du vill</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">Kaddio anpassar sig efter dina behov. Välj de delar du behöver, du betalar bara för det du använder. Kaddio är så enkelt att använda att du knappt behöver tänka när du använder det, den energi kan du lägga på t.ex. dina kunder. Genom att alla funktioner finns i samma enkla system slipper du trötta ut frontalloben i onödan. Din hjärna kommer att älska det.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        
        <ModulePresentation href="sv/module/log">
          <span slot="icon">
            <i class="text-white fa-regular fa-heart"></i>
          </span>
          <span slot="title">Journal</span>
          <span slot="body">Använd Kaddios egna mallar för anteckningar och rubriker eller skräddarsy allt efter verksamhetens behov.</span>
      </ModulePresentation>
      <ModulePresentation href="sv/module/cal">
          <span slot="icon">
            <i class="text-white fa-regular fa-stopwatch"></i>
        </span>
          <span slot="title">Tidsbokning och kalender</span>
          <span slot="body">Automatisera ditt schema och låt dina kunder boka och betala själva eller ta kontroll över varje minut.</span>
      </ModulePresentation>
  
      <ModulePresentation href="sv/module/invoicing">
            <span slot="icon">
                <i class="text-white fa-regular fa-file-lines"></i>
            </span>
            <span slot="title">Fakturering</span>
            <span slot="body">Spara tid med integrerad fakturering. Fakturera från tidsbokning, journal och fakturera manuellt om du vill.</span>
      </ModulePresentation>
          
      <ModulePresentation href="sv/module/chat">
        <span slot="icon">
            <i class="text-white fa-regular fa-comments"></i>
        </span>
      <span slot="title">Kommunikation</span>
          <span slot="body">Kommunicera krypterat via chat eller video inom och utom organisationen. Med två eller 500 deltagare.</span>
      </ModulePresentation>
  
      <ModulePresentation href="sv/module/forms">
        <span slot="icon">
            <i class="text-white fa-regular fa-clipboard-list-check"></i>
        </span>
      <span slot="title">Formulär</span>
          <span slot="body">Automatisera utskick av formulär och hälsodeklarationer.</span>
      </ModulePresentation>
          
      <ModulePresentation href="/booking">
        <span slot="icon">
            <i class="text-white fa-regular fa-list-ul"></i>
        </span>
          <span slot="title">Uppgifter</span>
          <span slot="body">Gör din egen att-göra-lista eller delegera till någon annan.</span>
      </ModulePresentation>
                  
      <ModulePresentation href="/county-export">
        <span slot="icon">
            <i class="text-white fa-regular fa-folder-tree"></i>
        </span>
          <span slot="title">Dokument</span>
          <span slot="body">Samarbeta i molnet med dina kollegor. Begränsa åtkomst i filhanteringssystemet med avancerad behörighetsstyrning. Versionshantering och backup kommer automatiskt.</span>
      </ModulePresentation>

      <ModulePresentation href="/county-export">
        <span slot="icon">
            <i class="text-white fa-regular fa-chart-line"></i>
        </span>
          <span slot="title">Rapporter</span>
          <span slot="body">Få koll på verksamheten med Kaddios statistikverktyg. Visualisera data i Kaddio eller exportera för egen analys. </span>
      </ModulePresentation>
      </dl>
    </div>
  </div>
</div>

