<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Sistema de reservas</title>
	<meta name="description" content="Kaddio tiene un servicio de reservas en el que tus clientes pueden reservar a través de una web accesible al público. También puedes optar por administrar las reservas tu mismo dentro de Kaddio." />
</svelte:head>

<ModuleSection>
	<span slot="title">Sistema de reservas</span>
	<span slot="sub">Kaddio tiene un servicio de reservas en el que tus clientes pueden reservar a través de una web accesible al público. También puedes optar por administrar las reservas tu mismo dentro de Kaddio.</span>
<!-- 
	<ModuleFeature>
		<span slot="title">Automatisera</span>
		<span slot="body">
			Automatisera ditt schema och låt dina kunder boka och betala själva eller ta kontroll över varje minut. Bokningstyper kan konfigureras i detalj och detta hjälper dig sen i bokningen så att det blir lätt där. Automatiskta påminnelser
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Samarbeta</span>
		<span slot="body">
			Använd kalendern för att boka möten.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Effektivisera</span>
		<span slot="body">
			Har du återkommande händelser i kalendern? Skapa mallar och spara tid
		</span>
	</ModuleFeature> -->
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Calendario</span>
		<span slot="a">
			Administra las reservas en el calendario. Por ejemplo, cambia o cancela una cita. En el calendario, verás las reservas junto con las reuniones y otras actividades.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Sistema de reservas accesible</span>
		<span slot="a">
			El cliente puede hacer reservas él mismo a través de un sitio web accesible al público
		</span>
	</Qa>

	<Qa>
		<span slot="q">Reserva con Mobilt BankID</span>
		<span slot="a">
			El cliente inicia sesión en Kaddio con Mobil BankID para poder reservar una cita. Adecuado para aquellos que quieren asegurar la identidad de la persona que reserva.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Recordatorios SMS</span>
		<span slot="a">
			Elija si y cuándo se envían recordatorios por SMS antes de una cita reservada.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Formularios</span>
		<span slot="a">
			Envía formularios automáticamente cuando se realiza una reserva. Por ejemplo, formularios de evaluación y declaraciones de salud.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Formas de tratamiento</span>
		<span slot="a">
			Ofrece tipos de tratamientos diferentes. Vincula formas de tratamiento a diferentes terapeutas. Personaliza los mensajes de texto y correos electrónicos según el tratamiento.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Reserva de grupo</span>
		<span slot="a">
			Publica horarios que se puedan reservar para más de un paciente.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Optimización del tiempo</span>
		<span slot="a">
			Evite huecos innecesarios en el calendario. Kaddio optimiza los tiempos de reserva en función de la duración del tratamiento.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Pago con tarjeta al reservar</span>
		<span slot="a">
			El cliente puede pagar directamente con tarjeta al reservar online.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Facturación</span>
		<span slot="a">
			Se crean documentos de facturación de forma automática en función de las reservas.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Sistema de reservas en tu página web</span>
		<span slot="a">
			Integra el sistema de reservas directamente en tu página web
		</span>
	</Qa>

	<Qa>
		<span slot="q">Múltiples localizaciones</span>
		<span slot="a">
			Kaddio soporta múltiples localizaciones. La información de los recordatorios por correo electrónico y SMS se adapta según la ubicación.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Reserva inteligente de consultorios</span>
		<span slot="a">
			Programación planificada. Kaddio asegura que los tratamientos solo se reservan cuando hay consultorios disponibles.
		</span>
	</Qa>



</FaqSection>