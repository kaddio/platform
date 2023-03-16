<script>
	import ModulePresentation from "../components/modulePresentation.svelte";
	import Modules from "../components/modules.svelte";

</script>

<Modules>
	
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
        
</Modules>