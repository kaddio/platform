<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import { hrefLangAlternates } from "$lib/stores";

</script>

<svelte:head>
	{@html hrefLangAlternates('journalsystem')}
	<title>Electronic medical record</title>
	<meta name="description" content="Kaddio Electronic Medical Record is a complete system for documenting your clients." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/log-overview-se.png" alt="Kaddio Electronic medical record">
	<span slot="h1">Electronic medical record</span>
	<span slot="title">Kaddio EMR</span>
	<span slot="sub">
		Kaddio EMR is an electronic medical record system that has everything you need to document your business and journal your clients. A complete solution for health professionals.
	</span>

	<ModuleFeatureWithIcon icon="pen">
		<span slot="title">
			Document it
		</span>
		<span slot="body">
			Keep your notes safe and secure, wherever you are. No paper, binders or backups.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="sliders">
		<span slot="title">
			Customize
		</span>
		<span slot="body">
			Tool up your own templates for journal entries based on your business needs.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="gamepad-modern">
		<span slot="title">
			Control
		</span>
		<span slot="body">
			Control access to clients and journals. You decide who can access what.
			Follow activity in journals through Kaddio's log for traceability and regulatory compliance.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>


<FaqSection>
	<span slot="title">Details</span>

	<Qa>
		<span slot="q">Templates</span>
		<span slot="a">
			Create medical record templates tailored to your needs. Choose your own search phrases and titles.
		</span>
	</Qa>
	
	<Qa>
		<span slot="q">Medical record forms</span>
		<span slot="a">
			Create your own forms or use commonly used standard forms directly from Kaddio. Send assessment forms and health declarations via e-mail and SMS. Journal forms can be sent automatically when you get a new booking, or manually if necessary. The answers are saved in the journal.		</span>
	</Qa>

	<Qa>
		<span slot="q">Letters and referrals</span>
		<span slot="a">
			Create letters, referrals, referral responses and certificates. Send by post, via Kaddio Communication or download as PDF.		</span>
	</Qa>

	<Qa>
		<span slot="q">ICD-10</span>
		<span slot="a">
			Search by code or free text and add diagnoses to each journal entry.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Privileges</span>
		<span slot="a">
			Choose if everyone within your organization should be able to read a client's medical record or limit access to certain processors.
		</span>
	</Qa>

</FaqSection>