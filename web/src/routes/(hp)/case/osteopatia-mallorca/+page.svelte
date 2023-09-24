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
        Kaddio Case study @ Mallorca, Spain
    </span>
    
    <span slot="title">Meet Silvia</span>
    <span slot="subtitle">
      Silvia Triay is about to go kitesurfing with her family. She carefully watches the movement of the wind and waves at the Sa Rápita beach in Mallorca. 
    </span>
<!-- 
    <figure class="mt-16">
      <img class="aspect-video rounded-xl bg-gray-50 object-cover" src={imageHandler('/img/silvia.png', {format: "auto", width: 1200})} alt="">
    </figure> -->


    <span slot="intro">
      "You must be sharp and responsive at all times", Silvia says.
      Just as carefully as she watches the waves of the ocean, Silvia watches the movements and responses of her clients during osteopathic treatments.
      "You know that the circumstances may change at any moment and you have to adapt to whatever will happen next."
    </span>



    <LegalParagraph>
      Silvia and her husband run the center Osteopatía Mallorca in Palma. In 2022, they started the transition from pen and paper to digital medical records, using Kaddio.
    </LegalParagraph>


    <figure class="mt-16">
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/838309986?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Silvia Triay"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        <!-- <img class="aspect-video rounded-xl bg-gray-50 object-cover" src="/img/silvia.png" alt=""> -->
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
        <p>“Våra kunder investerar i oss med tid, engagemang, pengar och information och anförtror oss med ett stort ansvar. Vi engagerar oss i dessa investeringar och det förklarar varför vi strävar efter att arbeta balanserat, hålla våra kostnader låga, hur vi hanterar riskfaktorer och varför vi strävar efter att växa organiskt och stabilt.”</p>
      </blockquote>
      <figcaption class="mt-6 flex gap-x-4">
        <img class="h-6 w-6 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">Lena Nyberg</strong> - Chief Information Officer</div>
      </figcaption>
    </figure> -->

</Legal>


