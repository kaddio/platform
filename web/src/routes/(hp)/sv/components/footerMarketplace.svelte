<script>
	import { getContext } from "svelte";
	import { _ } from "$lib/stores";
	import { countryCodeFromLang, getRegion } from "$lib/regions";
  const lang = "sv";
</script>


<footer class="bg-gray-200" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-12 lg:px-8 lg:pt-16">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <img class="h-7" src="/img/kaddio-black.png" alt="Company name">
      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <!-- <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-gray-900">{ $_('Tjänster')}</h3>
            <ul class="mt-6 space-y-4">
              <li>
                <a href="/{lang}/feature/log" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Journal')}</a>
              </li>

              <li>
                <a href="/{lang}/feature/cal" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Tidsbokning')}</a>
              </li>

              <li>
                <a href="/{lang}/feature/invoicing" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Fakturering')}</a>
              </li>

              <li>
                <a href="/{lang}/feature/communication" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Chat')}</a>
              </li>

              <li>
                <a href="/{lang}/feature/documents" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Dokument')}</a>
              </li>

              <li>
                <a href="/{lang}/feature/forms" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Formulär')}</a>
              </li>

              <li>
                <a href="/{lang}/feature/communication" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Video')}</a>
              </li>

            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-gray-900">{ $_('Support')}</h3>
            <ul class="mt-6 space-y-4">
              <li>
                  <a href="{getRegion(countryCodeFromLang(lang)).helpCenterLink}" target="_blank" rel="noreferrer" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Hjälpcenter')}</a>
              </li>

              <li>
                <a href="/{lang}/support" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Kontakta oss')}</a>
              </li>

              <li>
                <a href="https://changelog.kaddio.com" target="_blank" rel="noreferrer" class="text-sm hover:underline leading-6 text-gray-600">Changelog</a>
              </li>

              <li>
                <a href="https://github.com/kaddio/documentation/wiki/Kaddio-GraphQL-API" target="_blank" rel="noreferrer" class="text-sm hover:underline leading-6 text-gray-600">Developer API</a>
              </li>
          </ul>
          </div>
        </div> -->
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
            <ul class="mt-6 space-y-4">
              <li>
                <a href="/about-us" class="text-sm hover:underline leading-6 text-gray-600">About us</a>
              </li>
  
              <!-- <li>
                <a href="/career" class="text-sm hover:underline leading-6 text-gray-600">Lediga tjänster</a>
              </li> -->

              <!-- <li>
                <a href="/partners" class="text-sm hover:underline leading-6 text-gray-600">Partners</a>
              </li> -->

              <!-- <li>
                <a href="/press" class="text-sm hover:underline leading-6 text-gray-600">Press</a>
              </li> -->

            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-gray-900">{ $_('Avtal') }</h3>
            <ul class="mt-6 space-y-4">
              <li>
                <a href="/{lang}/legal/tos" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Användarvillkor')}</a>
              </li>

              <li>
                <a href="/{lang}/legal/privacy" class="text-sm hover:underline leading-6 text-gray-600">{ $_('Sekretesspolicy')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>

    <div class="mt-8 border-t border-gray/10 pt-8 md:flex md:items-center md:justify-between">
      <div class="flex space-x-6 md:order-2">

      <a href="/choose-country-region" class="text-gray-600 text-sm hover:underline">
        Choose country or region
      </a>

      </div>
      <p class="mt-8 text-xs leading-5 text-gray-900 md:order-1 md:mt-0">&copy; 2023 Kaddio AB. All rights reserved.</p>
    </div>
  </div>
</footer>

