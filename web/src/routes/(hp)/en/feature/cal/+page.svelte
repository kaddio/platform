<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Time booking and calendar</title>
	<meta name="description" content="Easy-to-use time booking and online payment that does everything you expect." />
</svelte:head>

<ModuleSection>
	<span slot="title">Time booking and calendar</span>
	<span slot="sub">Easy-to-use time booking and online payment that does everything you expect.</span>

	<ModuleFeature>
		<span slot="title">Automate</span>
		<span slot="body">
			Automate you schedule and let your clients book and pay, or take meticulous control. Booking types can be configured in detail.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Collaborate</span>
		<span slot="body">
			Use the calendar to book meetings
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Streamline</span>
		<span slot="body">
			Streamline recurring events with templates.
	</ModuleFeature>
</ModuleSection>
  

<FaqSection>
	<span slot="title">Details</span>

	<Qa>
		<span slot="q">Calendar</span>
		<span slot="a">
			Administrate bookings in the calendar, for example, re-schedule or cancel appointments. The calendar shows bookings side by side with meetings and other activities.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Open booking for clients</span>
		<span slot="a">
			Allow clients to book their own appointments on a public web page.
		</span>
	</Qa>
<!--
	<Qa>
		<span slot="q">Bokning med Mobilt BankID</span>
		<span slot="a">
			Klienten loggar in i Kaddio med Mobilt BankID för att kunna boka tid. Passar dig som vill säkerställa identiteten på den som bokar.
		</span>
	</Qa>
-->
	<Qa>
		<span slot="q">Text reminders</span>
		<span slot="a">
			Choose if and when reminders are sent by text messages, before and after booked appointments.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Forms</span>
		<span slot="a">
			Automatically send forms in connection with bookings, for instance, assessment forms and health declarations.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Treatments</span>
		<span slot="a">
			Offer multiple treatments. Connect treatments to different users. Adjust text messages and emails to treatments.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Group sessions</span>
		<span slot="a">
			Schedule time slots that are bookable for more than one participant.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Time optimization</span>
		<span slot="a">
			Avoid unnecessary gaps in your schedule. Kaddio optimizes bookable times to the duration of your offered treatments and your scheduled working hours.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Waiting lists</span>
		<span slot="a">
			Create waiting lists with dates, notes and functions for delgation.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Pay by card at booking</span>
		<span slot="a">
			Let your clients pay by card directly when booking online.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Invoicing</span>
		<span slot="a">
			Invoice bases are created automatically from scheduled bookings.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Show bookable times on your website</span>
		<span slot="a">
			Integrate time booking directly on your website.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Places</span>
		<span slot="a">
			Kaddio handles if you have multiple offices. Information in emails and reminders by text messages are adjusted to the indicated place.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Book rooms</span>
		<span slot="a">
			Schedule your rooms. Kaddio ensures that treatments can only be booked if there are available rooms.
		</span>
	</Qa>
<!--
	<Qa>
		<span slot="q">Personalliggare</span>
		<span slot="a">
			Kaddio kan användas som digital personalliggare genom Arbetstid i Kalendern, med hjälp av Loggning uppfylls även Skatteverkets regler kring kontroll.
		</span>
	</Qa>
-->
	<Qa>
		<span slot="q">Logs</span>
		<span slot="a">
			Reading and editing of medical records are logged. The log shows what actions have been performed for the records of a client; by whom, when, and from what IP address.
		</span>
	</Qa>

</FaqSection>