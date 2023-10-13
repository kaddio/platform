<script>
    import ModulePresentation from '$components/modulePresentation.svelte';
    import ModulesSection from '$components/modulesSection.svelte';
    import { link } from '$lib/stores';
    import { getContext } from 'svelte';

    const lang = getContext('lang');
</script>

<ModulesSection>
    <span slot="title">Välj de tjänster du vill</span>
    <span slot="subtitle"
        >Kaddio anpassar sig efter dina behov. Välj de tjänster du behöver och ändra när du vill. Du
        betalar bara för det du använder.</span
    >

    <ModulePresentation href={$link('journalsystem', lang)}>
        <span slot="icon">
            <i class="text-white fa-regular fa-heart" />
        </span>
        <span slot="title">Journal</span>
        <span slot="body"
            >Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra
            klienter. Ett komplett journalsystem för vård.</span
        >
    </ModulePresentation>
    <ModulePresentation href={$link('onlinebokning', lang)}>
        <span slot="icon">
            <i class="text-white fa-regular fa-stopwatch" />
        </span>
        <span slot="title">Tidsbokning och kalender</span>
        <span slot="body"
            >Komplett bokningssystem och onlinebetalning som gör allt du förväntar dig. I Kaddio är
            kalendern även din publika bokning.</span
        >
    </ModulePresentation>

    <ModulePresentation href={$link('fakturering', lang)}>
        <span slot="icon">
            <i class="text-white fa-regular fa-file-lines" />
        </span>
        <span slot="title">Fakturering</span>
        <span slot="body"
            >Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag.</span
        >
    </ModulePresentation>

    <ModulePresentation href={$link('kommunikation', lang)}>
        <span slot="icon">
            <i class="text-white fa-regular fa-comments" />
        </span>
        <span slot="title">Chat och Video</span>
        <span slot="body"
            >Kommunicera krypterat via chat eller video inom och utom organisationen. Med två eller
            500 deltagare.</span
        >
    </ModulePresentation>

    <ModulePresentation href={$link('formulär', lang)}>
        <span slot="icon">
            <i class="text-white fa-regular fa-clipboard-list-check" />
        </span>
        <span slot="title">Formulär</span>
        <span slot="body">Automatisera utskick av formulär och hälsodeklarationer.</span>
    </ModulePresentation>

    <ModulePresentation href={$link('uppgifter', lang)}>
        <span slot="icon">
            <i class="text-white fa-regular fa-list-ul" />
        </span>
        <span slot="title">Uppgifter</span>
        <span slot="body">Gör din egen att-göra-lista eller delegera till någon annan.</span>
    </ModulePresentation>

    <ModulePresentation href={$link('dokument', lang)}>
        <span slot="icon">
            <i class="text-white fa-regular fa-folder-tree" />
        </span>
        <span slot="title">Dokument</span>
        <span slot="body"
            >Samarbeta i molnet med dina kollegor. Begränsa åtkomst i filhanteringssystemet med
            avancerad behörighetsstyrning. Versionshantering och backup kommer automatiskt.</span
        >
    </ModulePresentation>

    <ModulePresentation href={$link('rapporter', lang)}>
        <span slot="icon">
            <i class="text-white fa-regular fa-chart-line" />
        </span>
        <span slot="title">Rapporter</span>
        <span slot="body"
            >Få koll på verksamheten med Kaddios statistikverktyg. Visualisera data i Kaddio eller
            exportera för egen analys.
        </span>
    </ModulePresentation>
</ModulesSection>
