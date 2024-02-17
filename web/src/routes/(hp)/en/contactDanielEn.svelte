<script lang="ts">
    import SalesSection from "$components/salesSection.svelte";
    import { salesData } from "$lib/figureOutSaleInfo";
	import { _ } from "$lib/stores";
	const salesInfo = salesData();
</script>

<SalesSection imageSrc={salesInfo.src}>
	<span slot="title">
		Wondering if Kaddio is right for you?
	</span>
	<span slot="intro">{salesInfo.text}</span>
	<span slot="location">Göteborg, Sweden</span>
	<span slot="phone">+46 (0) 31-320 44 14</span>
</SalesSection>