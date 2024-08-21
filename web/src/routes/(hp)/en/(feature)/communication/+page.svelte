<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
	import ModuleFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import ProductFeatureImageOnLeft from "$components/productFeatureImageOnLeft.svelte";
    import Quote from "$components/quote.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import ProductPricingSection from "$components/productPricingSection.svelte";
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";
    import StatsSectionWithText from "$components/statsSectionWithText.svelte";
    import StatsSectionWithTextPart from "$components/statsSectionWithTextPart.svelte";

</script>

<svelte:head>
	<meta name="robots" content="noindex">

	<title>Chat and Video</title>
	<meta name="description" content="Chat and video for up to 500 users." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/chat-en.png" alt="Kaddio chat and video">
	<span slot="h1">Communication</span>
	<span slot="title">Kaddio Chat and Video</span>
	<span slot="sub">
		With Kaddio Chat and Video you communicate securely with clients and colleagues. Kaddio fulfils the requirements for strong authentication.
	</span>

	<ModuleFeatureWithIcon icon="lock">
		<span slot="title">
			Secure.
		</span>
		<span slot="body">
			Reguire login for video calls and chat with eID or two-factor authentication.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">
			Share information.
		</span>
		<span slot="body">
			Send sensitive information securely encrypted chats and video calls.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="seedling">
		<span slot="title">
			Grow with Kaddio.
		</span>
		<span slot="body">
			Offer private sessions or big lectures. Kaddio Video has support for more than 500 simultaneous users.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<!-- <ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Inspirerande text</span>
	<span slot="title">Why X uses Kaddio Chat and Video</span>
	<span slot="body">Beskrivande text med exempel från verklig kund hur denna modul hjälper just dem i sitt arbete. Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft> -->

<ModuleOverviewFeaturesSection>
	<span slot="pre">Contents</span>
	<span slot="title">This is Kaddio Chat and Video</span>
	<span slot="body">With Kaddio Chat and Video you communicate securely with clients and colleagues.
	</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Secure</span>
		<!-- <span slot="body">Underrubrik, utkommenterad för nu.</span> -->

		<ModuleOverviewFeature>Login with eID or two-factor authentication</ModuleOverviewFeature>
		<ModuleOverviewFeature>Encryption of all information</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Share information</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Encrypted file sharing in chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Screen sharing in video calls</ModuleOverviewFeature>
		<ModuleOverviewFeature>Recording of video calls for sharing with client in chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Contact form for clients</ModuleOverviewFeature>	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Grow with Kaddio</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Video calls for 2-500 participants</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        What our customers say about Kaddio Chat and Video       
    </span>

    <Quote>
        At Din Psykolog, we have had great help from Kaddio in our work with developing digital healthcare for the future, and they have been most accommodating with developing specific functions for our needs. We warmly recommend Kaddio!
        <span slot="quoted">
            Ramzi Jelassi <cite>Founder  <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a></cite>
        </span>
    </Quote>
    
    <Quote>
        Kaddio is user friendly, functional and suits our business perfectly!
        <span slot="quoted">
            Jimmy Lundqvist <cite>CEO IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a></cite>
        </span>
    </Quote>
    
    <Quote>
        I have the same demand for my medical records program as for my treatments: Efficiency. That is why I use Kaddio.
        <span slot="quoted">
            Jonas Evander <cite>Lic. Psychologist <a href="https://afobia.se" target="_blank" rel="noreferrer">Afobia</a></cite>
        </span>
    </Quote>

    <Quote>
        Kaddio is my chosen program for medical records due to its ease of use. The program is easy to navigate and adjust to my needs, both for medical records and for time bookings.
        <span slot="quoted">
            Amanda Follin <cite>Lic. Massage Therapist <a href="https://www.endorfinkliniken.com" target="_blank" rel="noreferrer">Endorfinkliniken</a></cite>
        </span>
    </Quote>

    <Quote>
        The program has everything I need and is easy to adjust to my needs. I can really recommend this program for medical records.
        <span slot="quoted">
            Sofia Viotti <cite>Lic. Psychologist Compassionfocus
        </span>
    </Quote>
    
</QuotesSection>

<!-- <ProductPricingSection></ProductPricingSection> -->

<!-- <StatsSectionWithText>
    <StatsSectionWithTextPart>
		<span slot="title">users</span>
		<span slot="sub">47 000+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">bookings per day</span>
		<span slot="sub">1300+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">video calls per month</span>
		<span slot="sub">8500+</span>
    </StatsSectionWithTextPart>
</StatsSectionWithText> -->


<StatsSection>
	<StatsSectionPart>
		<span slot="title">users</span>
		<span slot="sub">47 000+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">bookings per day</span>
		<span slot="sub">1300+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">video calls per month</span>
		<span slot="sub">8500+</span>
	</StatsSectionPart>
</StatsSection>

<!-- <FaqSection>
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

</FaqSection> -->