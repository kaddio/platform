<script>
	import Legal from "$components/legal.svelte";
    import LegalLi from "$components/legalLi.svelte";
    import LegalParagraph from "$components/legalParagraph.svelte";
	import LegalTitle from "$components/legalTitle.svelte";
	import LegalUl from "$components/legalUl.svelte";
</script>

<svelte:head>
	<title>Kaddio - Privacy policy</title>
	<meta name="description" content="Kaddio is responsible for the processing of personal data collected in Kaddio. We process personal data according to 
        the GDPR." />
</svelte:head>


<Legal>
    <span slot="pretitle">Kaddio Policy</span>
    <span slot="title">Privacy policy</span>
    <span slot="subtitle">
        Kaddio AB is responsible for the processing of personal data collected in Kaddio. We process personal data according to 
        the General Data Protection Regulation (GDPR). 
    </span>

    <span slot="intro">
        We process personal data that is necessary for the contractual relationship between Kaddio and the customer, 
        alternatively, in agreement with the customer to be able to provide the best service possible. Personal data is saved 
        for as long as needed for the business relationship with the customer, and then deleted. If you have questions or are dissatisfied you are welcome
        to contact us, or our data protection officer at <a class="font-semibold text-oldpink" href="mailto:dpo@kaddio.com">dpo@kaddio.com</a>.       
    </span>

    <LegalTitle>Processing of personal data of your clients</LegalTitle>

    <LegalParagraph>
      Regarding the personal data of clients that customers of Kaddio add to the system, Kaddio has responsibilities
      according to our Data Protection Agreement (DPA) that is available for download upon creation of an account.
    </LegalParagraph>

    <LegalParagraph>
      As a customer, you are responsible for taking appropriate organizational measures to fulfil GDPR with regards to 
      the processing of personal data of your clients. Each individual customer needs to decide where in the organization the
      responsibility for data protection issues lies. For more information on when it is adviceable or mandatory to 
      have a data protection officer and the responsibilities of such an officer, contact your local authorities for 
      privacy protection.                     
    </LegalParagraph>

    <LegalParagraph>
      Kaddio provides the technical conditions for you as a customer to be able to fulfil the requirements of GDPR.
    </LegalParagraph>


    <LegalTitle>
        Information we collect
    </LegalTitle>

    <LegalUl>
      <LegalLi><strong class="font-semibold text-gray-900">New customer.</strong> When you create a new organization we ask for personal data like given name, family name and email address.</LegalLi>
      <LegalLi><strong class="font-semibold text-gray-900">Usage.</strong> When you use Kaddio we save information about, for instance, what modules you have activated. In our server logs, we save information about your last log in.</LegalLi>
    </LegalUl>

    <LegalTitle>
      How we use information
    </LegalTitle>


    <LegalUl>
      <LegalLi><strong class="font-semibold text-gray-900">Improvement.</strong> Information that we collect is utilized to provide, improve and protect our services.</LegalLi>
      <LegalLi><strong class="font-semibold text-gray-900">Cookies.</strong> Our website kaddio.com does <strong>not</strong> use cookies. The Kaddio application only uses cookies for load balancing and security.</LegalLi>
    </LegalUl>


    <LegalTitle>
      Options
    </LegalTitle>

    <LegalParagraph>
      It is up to you as a customer to choose what information you want to share with us. The only 
      personal data you need to share with us to create an organization is your given name, last name, email address
      and the name of your organization.
    </LegalParagraph>


    <LegalTitle>
      Where personal data is handled
    </LegalTitle>

    <LegalParagraph>
      GDPR is applicable in the entire EU/ESS which implies that all EU member states have equal 
      protection of personal data and personal integrity.
    </LegalParagraph>





    <LegalUl>
      <LegalLi>According to GDPR, personal data can be processed freely within the EU/ESS without limitations.</LegalLi>
      <LegalLi>
        Outside of the EU/ESS, personal data can only be processed given that the data processor follows the given regulations 
        and has taken appropriate protective measures.
      </LegalLi>
    </LegalUl>


    <LegalParagraph>
        For all suppliers who process personal data on behalf of Kaddio outside of the EU/EES, 
        we have agreeements that contain standard contractual clauses imposed by the European commission
        which fulfils an adequate level of protection according to GDPR.
  </LegalParagraph>

    
    <LegalTitle>
        Data for the following purposes are handled outside of the EU/ESS
    </LegalTitle>



    <LegalUl>
      <LegalLi>
            <strong class="font-semibold text-gray-900">Newsletter.</strong> System to send newsletters from Kaddio to our customers.
      </LegalLi>

      <LegalLi>
            <strong class="font-semibold text-gray-900">SMS.</strong> System to deliver SMS via Twilio.
      </LegalLi>

      <!-- <LegalLi>
            <strong class="font-semibold text-gray-900">BankID.</strong> System to connect to BankID. <!--Add other eID methods when we have them-->
      <!-- </LegalLi> --> 

      <LegalLi>
        <strong class="font-semibold text-gray-900">Payment at booking.</strong> System to handle payment by card online at bookings.
      </LegalLi>

      <LegalLi>
            <strong class="font-semibold text-gray-900">Email.</strong> System for automated sending of emails for: invoicing, 
            invitations for practitioners and clients, receipts at bookings, and confirmations of bookings and cancellations.           
      </LegalLi>
    </LegalUl>        

      <LegalParagraph>
        All other information that contains personal data is handled within the EU/EES. 
        All storage of data from Electronic Medical Records and Communication is within the EU/EES.
      </LegalParagraph>

    <!-- <figure class="mt-10 border-l border-oldpink pl-9">
      <blockquote class="font-semibold text-gray-900">
        <p>“Våra kunder investerar i oss med tid, engagemang, pengar och information och anförtror oss med ett stort ansvar. Vi engagerar oss i dessa investeringar och det förklarar varför vi strävar efter att arbeta balanserat, hålla våra kostnader låga, hur vi hanterar riskfaktorer och varför vi strävar efter att växa organiskt och stabilt.”</p>
      </blockquote>
      <figcaption class="mt-6 flex gap-x-4">
        <img class="h-6 w-6 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">Lena Nyberg</strong> - Chief Information Officer</div>
      </figcaption>
    </figure> -->

    <LegalParagraph>
      For details, see our list of <a class="font-semibold text-oldpink" target="_blank" rel="noreferrer" href="https://github.com/kaddio/documentation/wiki/Third-Party-Subprocessors">Third-Party Subprocessors <i class="fa fa-regular fa-arrow-up-right-from-square" /></a>    
    </LegalParagraph>

    <LegalParagraph>
      See also  <a class="font-semibold text-oldpink" target="_blank" rel="noreferrer" href="https://github.com/kaddio/documentation/wiki/FAQ">FAQ <i class="fa fa-regular fa-arrow-up-right-from-square" /></a>    
    </LegalParagraph>
</Legal>