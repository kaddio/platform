<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";

</script>

<svelte:head>
	<title>Kaddio - Sistema de facturación</title>
	<meta name="description" content="Las facturas se crean automáticamente en función de las citas reservadas. También puedes crearlas de forma independiente. Todas las facturas se guardan en Kaddio." />
</svelte:head>

<ModuleSection>
	<span slot="title">Sistema de facturación</span>
	<span slot="sub">Las facturas se crean automáticamente en función de las citas reservadas. También puedes crearlas de forma independiente. Todas las facturas se guardan en Kaddio.</span>
<!-- 
	<ModuleFeature>
		<span slot="title">Spara tid</span>
		<span slot="body">
			Spara tid med integrerad fakturering. Kaddio föreslår automatiskt underlag utifrån bokade tider eller journalanteckningar så att du skicka en fakturera med tre klick.
		</span>
	</ModuleFeature>
	 -->
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Facturas</span>
		<span slot="a">
			Basándose en las reservas, Kaddio crea automáticamente las facturas.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envío de facturas</span>
		<span slot="a">
			Envía tus facturas por correo postal, correo electrónico, a través del chat de Kaddio o como factura electrónica.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Recordatorios</span>
		<span slot="a">
			Envía recordatorios de forma automática o manual.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Marcado automático</span>
		<span slot="a">
			Kaddio marca las facturas automáticamente cuando el cliente paga mediante transferencia bancaria.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Factura electrónica</span>
		<span slot="a">
			Envía facturas electrónicas con Kaddio según el estándar PEPPOL de la UE.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Cofacturación</span>
		<span slot="a">
			Factura varios clientes a una misma empresa, como un grupo o una compañía de seguros.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Exportación de datos para empresa de cobros</span>
		<span slot="a">
			Exporta facturas impagadas que luego podrán ser importadas a una empresa de cobros.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Contabilidad</span>
		<span slot="a">
			Exporta facturas como archivo .sie o archivo .csv para cargar en un programa de contabilidad.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Monedas</span>
		<span slot="a">
			Envía facturas en las 33 monedas más comunes del mundo, con tipos de cambio automáticos actualizados diariamente por el BCE. Kaddio publica automáticamente las ganancias y pérdidas de tipo de cambio en la exportación .sie.
		</span>
	</Qa>


</FaqSection>