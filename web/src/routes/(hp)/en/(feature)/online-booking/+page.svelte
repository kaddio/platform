<script>
	import Qa from "$components/qa.svelte";
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

	<title>Kaddio - Time booking and calendar</title>
	<meta name="description" content="Easy-to-use time booking and online payment that does everything you expect." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/booking-overview-en.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">Online booking</span>
	<span slot="title">Kaddio Booking</span>
	<span slot="sub">
		Kaddio Booking is your all-in-one calendar and booking system. Manage bookings, meetings and group sessions in the same view and get sorted.
	</span>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Plan.</span>
		<span slot="body">
			Create bookable times directly from your calendar. Let your clients book and pay themselves or take control of everything.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="people-pulling">
		<span slot="title">Collaborate.</span>
		<span slot="body">
			Schedule meetings and rooms for the entire organization.				
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Streamline</span>
		<span slot="body">
			Create templates for recurring events in your calendar and save time.
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<!-- <ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Inspirerande text</span>
	<span slot="title">Why X uses Kaddio Booking</span>
	<span slot="body">Beskrivande text med exempel från verklig kund hur denna modul hjälper just dem i sitt arbete. Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft> -->

<ModuleOverviewFeaturesSection>
	<span slot="pre">Contents</span>
	<span slot="title">This is Kaddio Booking</span>
	<span slot="body">Kaddio Booking helps you plan all activities of the organization in an 
		efficient and comprehensable way, whether you are self-employed or part of a 
		big company.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Plan</span>
		<!-- <span slot="body">Underrubrik, utkommenterad för nu.</span> -->

		<ModuleOverviewFeature>Calendar and booking in the same view</ModuleOverviewFeature>
		<ModuleOverviewFeature>Unlimited number of treatment types</ModuleOverviewFeature>
		
		<!-- <ModuleOverviewFeature>Booking with e-ID</ModuleOverviewFeature> -->
		<ModuleOverviewFeature>Reminders via email and texts</ModuleOverviewFeature>
		<ModuleOverviewFeature>Forms at booking</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Collaborate</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Scheduling of meetings</ModuleOverviewFeature>
		<ModuleOverviewFeature>Support for online businesses and multiple locations</ModuleOverviewFeature>
		<ModuleOverviewFeature>Staff register</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Streamline</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Templates for working hours</ModuleOverviewFeature>
		<ModuleOverviewFeature>Public booking for clients</ModuleOverviewFeature>
		<ModuleOverviewFeature>Payment at booking</ModuleOverviewFeature>
		<ModuleOverviewFeature>Arrival registration</ModuleOverviewFeature>
		<ModuleOverviewFeature>Waiting lists</ModuleOverviewFeature>
		<ModuleOverviewFeature>Z reports</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automated invoicing information with the module Invoicing</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<!-- <QuotesSection>
    <span slot="title">
        What our customers say about Kaddio Booking      
    </span>

    <Quote>
        Vi på Din Psykolog har haft stor hjälp av Kaddio i vårt arbete i att utveckla framtidens digitala vård, och de har varit väldigt tillmötesgående i utvecklingen av specifika funktioner vi behövt. Vi kan varmt rekommendera Kaddio!
        <span slot="quoted">
            Ramzi Jelassi <cite>Grundare  <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a></cite>
        </span>
    </Quote>
    <Quote>
        Det är ett rent nöje att fakturera med kaddio! Så smidigt och tydligt. Och så gör det ju skillnad att det är en snygg miljö också, mina andra program har sett ut som ... 😉. Tack för allt ni gör, min jobbdag blir så mycket härligare i kaddio!
        <span slot="quoted">
            Ulrika Hiscoke <cite>Leg Psykolog, medicine doktor <a href="https://arbor.kaddio.com" target="_blank" rel="noreferrer">Arbor Psykologi</a></cite>
        </span>
    </Quote>
    
    <Quote>
        Kaddio är användarvänligt, funktionellt och passar vår verksamhet perfekt!
        <span slot="quoted">
            Jimmy Lundqvist <cite>Chef IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a></cite>
        </span>
    </Quote>
    
</QuotesSection> -->

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
		<span slot="title">video meetings per month</span>
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
		<span slot="title">video meetings per month</span>
		<span slot="sub">8500+</span>
	</StatsSectionPart>
</StatsSection>

<!-- <FaqSection>
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

	<Qa>
		<span slot="q">Bokning med Mobilt BankID</span>
		<span slot="a">
			Klienten loggar in i Kaddio med Mobilt BankID för att kunna boka tid. Passar dig som vill säkerställa identiteten på den som bokar.
		</span>
	</Qa>

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

	<Qa>
		<span slot="q">Personalliggare</span>
		<span slot="a">
			Kaddio kan användas som digital personalliggare genom Arbetstid i Kalendern, med hjälp av Loggning uppfylls även Skatteverkets regler kring kontroll.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Logs</span>
		<span slot="a">
			Reading and editing of medical records are logged. The log shows what actions have been performed for the records of a client; by whom, when, and from what IP address.
		</span>
	</Qa>

</FaqSection> -->