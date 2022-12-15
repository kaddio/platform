<script>
	import ModulePresentation from "../components/modulePresentation.svelte";
	import Modules from "../components/modules.svelte";

</script>

<Modules>
	
    <ModulePresentation iconClass="mbri-hearth" href="/log">
        <span slot="title">Journalsystem online</span>
        <span slot="body">Flexibelt webbaserat journalprogram som du själv anpassar efter din verksamhets behov.</span>
    </ModulePresentation>
    <ModulePresentation iconClass="mbri-calendar" href="/booking">
        <span slot="title">Bokningssystem</span>
        <span slot="body">Bokningstjänst online för både klienter och behandlare.</span>
    </ModulePresentation>

    <ModulePresentation iconClass="mbri-credit-card" href="/booking">
        <span slot="title">Kortbetalning</span>
        <span slot="body">Ta betalt med kort i samband med bokning.</span>
    </ModulePresentation>

    <ModulePresentation iconClass="mbri-file" href="/booking">
        <span slot="title">Faktureringssystem</span>
        <span slot="body">Fakturera klienter och företag utifrån bokade tider eller journalanteckningar</span>
    </ModulePresentation>
        
    <ModulePresentation iconClass="mbri-chat" href="/booking">
        <span slot="title">Krypterad video och chat</span>
        <span slot="body">Säker video för upp till 100 deltagare.</span>
    </ModulePresentation>

    <ModulePresentation iconClass="mbri-edit" href="/booking">
        <span slot="title">Enkäter</span>
        <span slot="body">Skicka digitala enkäter till dina klienter.</span>
    </ModulePresentation>
        
    <ModulePresentation iconClass="mbri-edit" href="/booking">
        <span slot="title">Formulär</span>
        <span slot="body">Skicka formulär och hälsodeklarationer till dina kunder, automatiskt och manuellt.</span>
    </ModulePresentation>
        
    <ModulePresentation iconClass="mbri-flag" href="/booking">
        <span slot="title">Uppgifter</span>
        <span slot="body">Skapa din egen ”Att göra-lista”. Delegera uppgifter till andra och få överblick över vad som ska göras.</span>
    </ModulePresentation>

    <ModulePresentation iconClass="mbri-download" href="/county-export">
        <span slot="title">Samlingsräkning</span>
        <span slot="body">Exportera rapport över kontakttillfällen till din region.</span>
    </ModulePresentation>
        
    <ModulePresentation iconClass="mbri-cloud" href="/county-export">
        <span slot="title">Dokument</span>
        <span slot="body">Filhanteringssystem med avancerad behörighetsstyrning, versionshantering och samarbetsverktyg, i molnet.</span>
    </ModulePresentation>
        
</Modules>