<script lang="ts">
    import { imageHandler } from "$lib/img";
</script>


<div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
      <div class="lg:pr-4 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Därför använder Jonas Kaddio.</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <!-- <div class="mt-8">
            <a href="#" class="inline-flex rounded-md bg-oldpink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">Prova demo</a>
          </div> -->
          <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
            <blockquote class="text-base leading-7">
              <p>“Världen förändras, verksamheten förändras och därför behöver vi ett flexibelt system.”</p>
            </blockquote>
            <figcaption class="mt-6 flex gap-x-4 text-sm leading-6">
              <img src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" class="h-6 w-6 flex-none rounded-full">
              <div><span class="font-semibold text-gray-900">Jonas Evander</span> - Psykolog</div>
            </figcaption>
          </figure>
        </div>
      </div>
      <img src={imageHandler("/img/jonas-vid-dator.png", {format: "auto"})} loading="lazy" alt="Jonas at computer, using Kaddio" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0" width="2432" height="1442">
    </div>
  </div>
</div>
