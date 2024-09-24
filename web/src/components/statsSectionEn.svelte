<script>
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";
</script>

<StatsSection>
	<StatsSectionPart>
		<span slot="title">users</span>
		<span slot="sub">47 000+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">bookings per day</span>
		<span slot="sub">1300+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">video meetings per month</span>
		<span slot="sub">8500+</span>
	</StatsSectionPart>
</StatsSection>