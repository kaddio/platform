<script>
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";
</script>

<StatsSection>
    <StatsSectionPart>
        <span slot="title">usuarios</span>
        <span slot="sub">47 000+</span>
    </StatsSectionPart>
    <StatsSectionPart>
        <span slot="title">reservas por día</span>
        <span slot="sub">1300+</span>
    </StatsSectionPart>
    <StatsSectionPart>
        <span slot="title">reuniones por video al mes</span>
        <span slot="sub">8500+</span>
    </StatsSectionPart>
</StatsSection>