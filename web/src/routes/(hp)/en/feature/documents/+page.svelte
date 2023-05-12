<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Documents</title>
	<meta name="description" content="Collaborate in the cloud with your collegues. Restrict access in the file management system with advanced permission control. Version management and backup comes automatically." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Documents</span>
	<span slot="sub">Collaborate in the cloud with your collegues. Restrict access in the file management system with advanced permission control. Version management and backup comes automatically.</span>

	<!-- <ModuleFeature>
		<span slot="title">Collaborate</span>
		<span slot="body">
			...
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
		<span slot="q">Rich text</span>
		<span slot="a">
			Create and collaborate on rich text documents directly in Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Versioning</span>
		<span slot="a">
			Save versions of documents for traceability
		</span>
	</Qa>

	<Qa>
		<span slot="q">Upload</span>
		<span slot="a">
			Upload almost any kind of files in Kaddio
		</span>
	</Qa>

	<Qa>
		<span slot="q">Folders</span>
		<span slot="a">
			Structure your documents
		</span>
	</Qa>

	<Qa>
		<span slot="q">Privileges</span>
		<span slot="a">
			Control access to files and folders with read and write rules.
		</span>
	</Qa>

</FaqSection>
