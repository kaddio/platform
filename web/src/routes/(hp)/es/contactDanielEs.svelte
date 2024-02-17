<script>
    import SalesSection from "$components/salesSection.svelte";
    import { rawSalesData } from "$lib/figureOutSaleInfo";
</script>

<SalesSection imageSrc={rawSalesData.daniel.src}>
	<span slot="title">
		¿Estás pensando si Kaddio puede ser adecuado para ti?
	</span>

	<span slot="intro">
		Contacta a Daniel y él te ayudará. Disponible los jueves y viernes.
	</span>
	<span slot="location">
		Göteborg, Suecia
	</span>
	<span slot="phone">+46 (0) 31-320 44 14</span>
</SalesSection>