<script>
	import IconMap from "$components/iconMap.svelte";
import Legal from "$components/legal.svelte";
	import LegalLi from "$components/legalLi.svelte";
	import LegalParagraph from "$components/legalParagraph.svelte";
	import LegalTitle from "$components/legalTitle.svelte";
	import LegalUl from "$components/legalUl.svelte";

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<Legal>
    <span slot="pretitle">
        Case study @ Göteborg, Sweden
        
    </span>
    
    <span slot="title">Meet Petter</span>
    <span slot="subtitle">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
    </span>

    <span slot="intro">
        Samtliga personuppgifter vi behandlar är nödvändiga i avtalsförhållandet mellan Kaddio och kunden, alternativt sker
        med kundens samtycke för att tillhandahålla en så bra tjänst som möjligt. Vi sparar personuppgifterna så länge de
    </span>


    <figure class="mt-16">
  
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/331174627?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Petter Jormin, Osteopat"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

        <!-- <img class="aspect-video rounded-xl bg-gray-50 object-cover" src="/img/ana.png" alt=""> -->
      </figure>
    
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


