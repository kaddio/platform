<script>
	import ModulePresentation from "../components/modulePresentation.svelte";
</script>

<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Ge bättre hjälp</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Allt du behöver</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Kaddio är ett komplett webbaserat allt-i-allo-system för dig som hjälper andra. Kaddio är: Alla funktioner du behöver i samma enkla system. Du kommer att älska det.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
  
            <ModulePresentation iconClass="fa-duotone fa-fw fa-2x fa-heart" href="sv/module/log">
                <span slot="title">Journal</span>
                <span slot="body">Flexibelt webbaserat journalprogram som du själv anpassar efter din verksamhets behov.</span>
            </ModulePresentation>
            <ModulePresentation iconClass="fa-duotone fa-fw fa-2x fa-calendar" href="sv/module/booking">
                <span slot="title">Bokning</span>
                <span slot="body">Bokningstjänst online för både klienter och behandlare.</span>
            </ModulePresentation>
        
            <ModulePresentation iconClass="fa-duotone fa-fw fa-2x fa-credit-card" href="sv/module/payment">
                <span slot="title">Kortbetalning</span>
                <span slot="body">Ta betalt med kort i samband med bokning.</span>
            </ModulePresentation>
        
            <ModulePresentation iconClass="fa-duotone fa-fw fa-2x fa-file" href="sv/module/invoicing">
                <span slot="title">Fakturering</span>
                <span slot="body">Fakturera klienter och företag utifrån bokade tider eller journalanteckningar</span>
            </ModulePresentation>
                
            <ModulePresentation iconClass="fa-duotone fa-fw fa-2x fa-comment" href="sv/module/chat">
                <span slot="title">Video och chat</span>
                <span slot="body">Säker video för upp till 300 deltagare.</span>
            </ModulePresentation>
        
            <ModulePresentation iconClass="fa-duotone fa-fw fa-2x fa-edit" href="sv/module/forms">
                <span slot="title">Formulär</span>
                <span slot="body">Skicka formulär och hälsodeklarationer till dina kunder, automatiskt och manuellt.</span>
            </ModulePresentation>
                
            <ModulePresentation iconClass="fa-duotone fa-fw fa-2x fa-check" href="/booking">
                <span slot="title">Uppgifter</span>
                <span slot="body">Skapa din egen ”Att göra-lista”. Delegera uppgifter till andra och få överblick över vad som ska göras.</span>
            </ModulePresentation>
        
                
            <ModulePresentation iconClass="fa-duotone fa-fw fa-2x fa-folder-tree" href="/county-export">
                <span slot="title">Dokument</span>
                <span slot="body">Filhanteringssystem med avancerad behörighetsstyrning, versionshantering och samarbetsverktyg, i molnet.</span>
            </ModulePresentation>
                            
  
  
        </dl>
      </div>
    </div>
  </div>
  

	
