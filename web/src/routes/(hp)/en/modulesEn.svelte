<script>
  import ModulePresentation from "../components/modulePresentation.svelte";
	import ModulesSection from "../components/modulesSection.svelte";
</script>

<ModulesSection>
  <span slot="title">Choose the functions you want</span> 
  <span slot="subtitle">Kaddio anpassar sig efter dina behov. Välj de funktioner du behöver och ändra när du vill. Du betalar bara för det du använder.</span> 

    <ModulePresentation href="en/feature/log">
        <span slot="icon">
          <i class="text-white fa-regular fa-heart"></i>
        </span>
        <span slot="title">Medical record</span>
        <span slot="body">Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård.</span>
    </ModulePresentation>
    <ModulePresentation href="en/feature/cal">
        <span slot="icon">
          <i class="text-white fa-regular fa-stopwatch"></i>
      </span>
        <span slot="title">Time booking and calendar</span>
        <span slot="body">Komplett bokningssystem och onlinebetalning som gör allt du förväntar dig. I Kaddio är kalendern även din publika bokning.</span>
    </ModulePresentation>

    <ModulePresentation href="en/feature/invoicing">
          <span slot="icon">
              <i class="text-white fa-regular fa-file-lines"></i>
          </span>
          <span slot="title">Invoicing</span>
          <span slot="body">Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag.</span>
    </ModulePresentation>
        
    <ModulePresentation href="en/feature/communication">
      <span slot="icon">
          <i class="text-white fa-regular fa-comments"></i>
      </span>
    <span slot="title">Communication</span>
        <span slot="body">Kommunicera krypterat via chat eller video inom och utom organisationen. Med två eller 500 deltagare.</span>
    </ModulePresentation>

    <ModulePresentation href="en/feature/forms">
      <span slot="icon">
          <i class="text-white fa-regular fa-clipboard-list-check"></i>
      </span>
    <span slot="title">Forms</span>
        <span slot="body">Automatisera utskick av formulär och hälsodeklarationer.</span>
    </ModulePresentation>
        
    <ModulePresentation href="en/feature/todos">
      <span slot="icon">
          <i class="text-white fa-regular fa-list-ul"></i>
      </span>
        <span slot="title">Todos</span>
        <span slot="body">Gör din egen att-göra-lista eller delegera till någon annan.</span>
    </ModulePresentation>
                
    <ModulePresentation href="en/feature/documents">
      <span slot="icon">
          <i class="text-white fa-regular fa-folder-tree"></i>
      </span>
        <span slot="title">Documents</span>
        <span slot="body">Collaborate in the cloud with your collegues. Restrict access in the file management system with advanced permission control. Version management and backup comes automatically.</span>
    </ModulePresentation>

    <ModulePresentation href="en/feature/reports">
      <span slot="icon">
          <i class="text-white fa-regular fa-chart-line"></i>
      </span>
        <span slot="title">Reports</span>
        <span slot="body">Få koll på verksamheten med Kaddios statistikverktyg. Visualisera data i Kaddio eller exportera för egen analys. </span>
    </ModulePresentation>

</ModulesSection>   