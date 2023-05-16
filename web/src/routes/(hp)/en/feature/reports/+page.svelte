<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Reports</title>
	<meta name="description" content="Get an overview of your business with Kaddio's statistics tool. Visualize data in Kaddio or export for your own analysis." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Reports</span>
	<span slot="sub">Get an overview of your business with Kaddio's statistics tool. Visualize data in Kaddio or export for your own analysis.</span>

	<!-- <ModuleFeature>
		<span slot="title">Förbered</span>
		<span slot="body">
			... Kaddio kan automatiskt skicka de formulär eller hälsodeklarationen du vill ha ifyllda innan besöket.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Mät</span>
		<span slot="body">
			...
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Återkoppla</span>
		<span slot="body">
			...
		</span>
	</ModuleFeature> -->
</ModuleSection>
  

<FaqSection>
	<span slot="title">Details</span>

	<Qa>
		<span slot="q">Create reports</span>
		<span slot="a">
			Use Kaddio's statistics tool to create reports on bookings, invoicing, survey responses and more. Visualize the result graphically and export data as .csv.		</span>
	</Qa>

	<Qa>
		<span slot="q">Create surveys</span>
		<span slot="a">
			Design surveys the way you want. Use different response types, such as free text, scale, numeric value, and multiple choice. Choose how Kaddio should calculate the result, for example as a sum or average value. Set and name limits to get a quick overview of the result.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Dispatch</span>
		<span slot="a">
			Send a link to the survey via SMS or email.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Send surveys based on bookings</span>
		<span slot="a">
			Send surveys to the clients who had a booking within a certain time interval.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Send surveys based on group</span>
		<span slot="a">
			Send surveys to clients or therapists based on which group they belong to.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Surveys provide anonymous responses</span>
		<span slot="a">
			Collected responses that are anonymous and cannot be linked to any specific client or processor.
		</span>
	</Qa>

</FaqSection>
