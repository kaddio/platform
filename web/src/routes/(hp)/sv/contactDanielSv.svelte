<script>
    import SalesSection from "$components/salesSection.svelte";
    import { salesData } from "$lib/figureOutSaleInfo";
	import { _ } from "$lib/stores";
	const salesInfo = salesData();

</script>

<SalesSection imageSrc={salesInfo.src}>
	<span slot="title">Funderar du på om Kaddio kan passa dig?</span>
	<span slot="intro">{$_(salesInfo.text, 'se')}</span>
	<span slot="location">Göteborg, Sverige</span>
	<span slot="phone">+46 (0) 31-320 44 14</span>
</SalesSection>