<script>
  import ModulePresentation from "$components/modulePresentation.svelte";
	import ModulesSection from "$components/modulesSection.svelte";
</script>

<ModulesSection>
  <span slot="title">Välj de funktioner du vill</span> 
  <span slot="subtitle">Kaddio anpassar sig efter dina behov. Välj de funktioner du behöver och ändra när du vill. Du betalar bara för det du använder.</span> 

    <ModulePresentation href="sv/feature/log">
        <span slot="icon">
          <i class="text-white fa-regular fa-heart"></i>
        </span>
        <span slot="title">Journal</span>
        <span slot="body">Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård.</span>
    </ModulePresentation>
    <ModulePresentation href="sv/feature/cal">
        <span slot="icon">
          <i class="text-white fa-regular fa-stopwatch"></i>
      </span>
        <span slot="title">Tidsbokning och kalender</span>
        <span slot="body">Komplett bokningssystem och onlinebetalning som gör allt du förväntar dig. I Kaddio är kalendern även din publika bokning.</span>
    </ModulePresentation>

    <ModulePresentation href="sv/feature/invoicing">
          <span slot="icon">
              <i class="text-white fa-regular fa-file-lines"></i>
          </span>
          <span slot="title">Fakturering</span>
          <span slot="body">Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag.</span>
    </ModulePresentation>
        
    <ModulePresentation href="sv/feature/communication">
      <span slot="icon">
          <i class="text-white fa-regular fa-comments"></i>
      </span>
    <span slot="title">Kommunikation</span>
        <span slot="body">Kommunicera krypterat via chat eller video inom och utom organisationen. Med två eller 500 deltagare.</span>
    </ModulePresentation>

    <ModulePresentation href="sv/feature/forms">
      <span slot="icon">
          <i class="text-white fa-regular fa-clipboard-list-check"></i>
      </span>
    <span slot="title">Formulär</span>
        <span slot="body">Automatisera utskick av formulär och hälsodeklarationer.</span>
    </ModulePresentation>
        
    <ModulePresentation href="sv/feature/todos">
      <span slot="icon">
          <i class="text-white fa-regular fa-list-ul"></i>
      </span>
        <span slot="title">Uppgifter</span>
        <span slot="body">Gör din egen att-göra-lista eller delegera till någon annan.</span>
    </ModulePresentation>
                
    <ModulePresentation href="sv/feature/documents">
      <span slot="icon">
          <i class="text-white fa-regular fa-folder-tree"></i>
      </span>
        <span slot="title">Dokument</span>
        <span slot="body">Samarbeta i molnet med dina kollegor. Begränsa åtkomst i filhanteringssystemet med avancerad behörighetsstyrning. Versionshantering och backup kommer automatiskt.</span>
    </ModulePresentation>

    <ModulePresentation href="sv/feature/reports">
      <span slot="icon">
          <i class="text-white fa-regular fa-chart-line"></i>
      </span>
        <span slot="title">Rapporter</span>
        <span slot="body">Få koll på verksamheten med Kaddios statistikverktyg. Visualisera data i Kaddio eller exportera för egen analys. </span>
    </ModulePresentation>

</ModulesSection>   