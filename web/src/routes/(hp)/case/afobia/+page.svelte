<script>
	import IconMap from "$components/iconMap.svelte";
import Legal from "$components/legal.svelte";
	import LegalLi from "$components/legalLi.svelte";
	import LegalParagraph from "$components/legalParagraph.svelte";
	import LegalTitle from "$components/legalTitle.svelte";
	import LegalUl from "$components/legalUl.svelte";
	import { imageHandler } from "$lib/img";

</script>

<Legal>
    <span slot="pretitle">
        Kaddio Case study @ Stockholm, Sweden
    </span>
    
    <span slot="title">Meet Jonas</span>
    <span slot="subtitle">
      "The common goal with all my businesses is to help people improve their mental health."
    </span>

    <span slot="intro">
        Jonas Evander is a psychologist, psychotherapist and business developer who runs several clinics in Stockholm: PsykologA for therapy and coaching, Afobia that specializes in CBT for phobia and fear, and Amedo, a web-based clinic for neuropsychiatric evaluations.

    </span>
<!-- 

    <figure class="mt-16">
        <img class="aspect-video rounded-xl bg-gray-50 object-cover" src={imageHandler('/img/ana.png', {format: "auto", width: 1200})} alt="">
    </figure>
 -->


    <LegalParagraph>
        Jonas uses Kaddio for all three businesses. The idea for Amedo was even triggered by a certatin functionality he found in Kaddio. "As Kaddio develops, I find new opportunities to develop my businesses".

        
    </LegalParagraph>

    <LegalParagraph>
    What Jonas likes the most about Kaddio is the stability of the system and the responsiveness of the Kaddio team. "The world changes, the business changes and therefore, we need a flexible system", Jonas concludes.
    </LegalParagraph>

    <figure class="mt-16">
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/877785631?h=48a4ba7452" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Jonas Evander, Psychologist"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

        <!-- <img class="aspect-video rounded-xl bg-gray-50 object-cover" src="/img/ana.png" alt=""> -->
    </figure>



    <!-- <figure class="mt-16">
        <img class="aspect-video rounded-xl bg-gray-50 object-cover" src="/img/ana.png" alt="">
        <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Faucibus commodo massa rhoncus, volutpat.
        </figcaption>
      </figure> -->
    
<!-- 
    <LegalTitle>
      Modules
    </LegalTitle>



    <LegalUl>
        <LegalLi>
            <strong class="font-semibold text-gray-900">
                Kaddio Journal.
            </strong> 
            Ana uses Kaddio Journal to ...
        </LegalLi>
  
        <LegalLi>
              <strong class="font-semibold text-gray-900">Kaddio Booking.</strong> 
              Clients can book...
        </LegalLi>
  
    </LegalUl>        
  

    <LegalParagraph>
        Samtliga företag som hanterar personuppgifter för Kaddios räkning utanför EU/ESS har vi avtal med som
innehåller standardavtalsklausuler som EU-kommissionen har beslutat om, vilket uppfyller skyddsnivå
enligt GDPR.
  </LegalParagraph>


    
      <LegalParagraph>
        Övrig data som innehåller personuppgifter hanteras inom EU/ESS. All lagring av data från Journal och Kommunikation sker inom EU/ESS.
      </LegalParagraph>

    <figure class="mt-10 border-l border-oldpink pl-9">
      <blockquote class="font-semibold text-gray-900">
        <p>“Ana säger....”</p>
      </blockquote>
      <figcaption class="mt-6 flex gap-x-4">
        <img class="h-6 w-6 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">Ana Nyberg</strong> - Chief Information Officer</div>
      </figcaption>
    </figure>
--->

</Legal>


