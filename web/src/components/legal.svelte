<script>
</script>

<div class="bg-white py-32 px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p class="text-base font-semibold leading-7 text-oldpink"><slot name="pretitle" /></p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><slot name="title" /></h1>

        <p class="mt-6 text-xl leading-8">
            <slot name="subtitle" />
        </p>

        <div class="mt-10 max-w-2xl">
            <p>
                <slot name="intro" />            
            </p>
        
            <slot />


        <!-- <figure class="mt-10 border-l border-oldpink pl-9">
          <blockquote class="font-semibold text-gray-900">
            <p>“Våra kunder investerar i oss med tid, engagemang, pengar och information och anförtror oss med ett stort ansvar. Vi engagerar oss i dessa investeringar och det förklarar varför vi strävar efter att arbeta balanserat, hålla våra kostnader låga, hur vi hanterar riskfaktorer och varför vi strävar efter att växa organiskt och stabilt.”</p>
          </blockquote>
          <figcaption class="mt-6 flex gap-x-4">
            <img class="h-6 w-6 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">Lena Nyberg</strong> - Chief Information Officer</div>
          </figcaption>
        </figure> -->
        
        </div>
    </div>
</div>
  
