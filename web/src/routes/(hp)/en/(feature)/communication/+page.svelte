<script>
    import ModuleSectionWithImage from '$components/moduleSectionWithImage.svelte';
    import ModuleFeatureWithIcon from '$components/moduleFeatureWithIcon.svelte';
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import Quote from "$components/quote.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import StatsSectionEn from '$components/statsSectionEn.svelte';
    import StatsSectionPart from "$components/statsSectionPart.svelte";
	import QuoteEnJimmy from '$components/quoteEnJimmy.svelte';
	import QuoteEnJonas from '$components/quoteEnJonas.svelte';
	import QuoteEnRamzi from '$components/quoteEnRamzi.svelte';
	import QuoteEnSofia from '$components/quoteEnSofia.svelte';
	import QuoteEnUlrika from '$components/quoteEnUlrika.svelte';
	import ContactDanielEn from '$components/contactDanielEn.svelte';
	import PricesEn from '$components/pricesEn.svelte';
</script>

<svelte:head>
    <meta name="robots" content="noindex">

    <title>Kaddio - Communication</title>
    <meta name="description" content="Chat and video for up to 500 participants" />
</svelte:head>


<ModuleSectionWithImage src="/img/kaddio-screenshots/chat-en.png" alt="Kaddio Chat and Video">
	<span slot="h1">Communication</span>
	<span slot="title">Kaddio Chat and Video</span>
	<span slot="sub">
		Kaddio Chat och Video enables you to communicate and share information securely with 
		clients and colleagues. Kaddio fulfils requirements for strong authentication.
	</span>



    <ModuleFeatureWithIcon icon="comment">
		<span slot="title">Communicate.</span>
		<span slot="body">
			Video calls, chat and contact forms in an encrypted environment. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">Share information.</span>
		<span slot="body">
			Send sensitive information, files and images securely to clients and colleagues.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="lock-keyhole">
		<span slot="title">Secure.</span>
		<span slot="body">
			Require login to video calls with two-factor authentication.
		</span> 
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Contents</span>
	<span slot="title">This is Kaddio Chat and Video</span>
	<span slot="body"> WIth Kaddio Chat and Video you communicate securely with clients and colleagues. 
		<br>Everything in Kaddio is encrypted.
	</span>
	
    <ModuleOverviewFeaturesSegment>
		<span slot="title">Communicate</span>
		
		<ModuleOverviewFeature>Video calls for 2-500 participants</ModuleOverviewFeature>
		<ModuleOverviewFeature>Screen sharing in video calls</ModuleOverviewFeature>
        <ModuleOverviewFeature>Chat with clients and colleagues</ModuleOverviewFeature>
        <ModuleOverviewFeature>Group chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Email clients from the chat</ModuleOverviewFeature>
        <ModuleOverviewFeature>Contact forms for clients</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Share information</span>
	
		<ModuleOverviewFeature>
			Attach files, for example, medical records or other sensitive information</ModuleOverviewFeature>
		<ModuleOverviewFeature>
			Consent forms with signing function </ModuleOverviewFeature>
		<ModuleOverviewFeature>Recording of video calls</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automated dispatches of forms from the contact form</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Secure</span>
			
		<ModuleOverviewFeature>Fulfils requirements for strong authentication</ModuleOverviewFeature>
		<ModuleOverviewFeature>Login methods for clients with two-factor authentication via SMS</ModuleOverviewFeature>
			
	</ModuleOverviewFeaturesSegment>
  
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        What our customers say about <br>Kaddio Chat and Video       
    </span>
    <QuoteEnJimmy />
    <QuoteEnJonas />
    <QuoteEnRamzi />
    <QuoteEnSofia />
    
</QuotesSection>

<StatsSectionEn />

<PricesEn />

<ContactDanielEn />