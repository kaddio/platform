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
        Case study @ Mallorca, Spain
        
    </span>
    
    <span slot="title">Meet Ana Casanova</span>
    <span slot="subtitle">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
    </span>

    <span slot="intro">
        Samtliga personuppgifter vi behandlar är nödvändiga i avtalsförhållandet mellan Kaddio och kunden, alternativt sker
        med kundens samtycke för att tillhandahålla en så bra tjänst som möjligt. Vi sparar personuppgifterna så länge de
        behövs i vår affärsrelation med kunden och raderas därefter. Har du frågor eller är missnöjd är du välkommen att
        höra av dig till oss eller till vårt dataskyddsombud <a class="font-semibold text-oldpink" href="mailto:dpo@kaddio.com">dpo@kaddio.com</a>        
    </span>


    <figure class="mt-16">
        <img class="aspect-video rounded-xl bg-gray-50 object-cover" src="/img/ana.png" alt="">
        <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
          </svg>
          Faucibus commodo massa rhoncus, volutpat.
        </figcaption>
      </figure>
    

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
    </figure>

</Legal>


