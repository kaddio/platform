<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

<script>
  function changeRegion(event){
    window.location.href = `/hp/${event.target.value}/`;
  }
</script>


<footer class="bg-gray-100" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <img class="h-7" src="/img/kaddio-svart.png" alt="Company name">
      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-gray-600">Tjänster</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="/hp/sv/feature/log" class="text-sm leading-6 text-gray-600">Journal</a>
              </li>

              <li>
                <a href="/hp/sv/feature/cal" class="text-sm leading-6 text-gray-600">Tidsbokning</a>
              </li>

              <li>
                <a href="/hp/sv/feature/invoicing" class="text-sm leading-6 text-gray-600">Fakturering</a>
              </li>

              <li>
                <a href="/hp/sv/feature/communication" class="text-sm leading-6 text-gray-600">Chat</a>
              </li>

              <li>
                <a href="/hp/sv/feature/documents" class="text-sm leading-6 text-gray-600">Dokument</a>
              </li>

              <li>
                <a href="/hp/sv/feature/forms" class="text-sm leading-6 text-gray-600">Formulär</a>
              </li>

              <li>
                <a href="/hp/sv/feature/communication" class="text-sm leading-6 text-gray-600">Video</a>
              </li>

            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-gray-600">Support</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="https://help.kaddio.com/help" target="_blank" rel="noreferrer" class="text-sm leading-6 text-gray-600">Hjälpcenter</a>
              </li>

              <li>
                <a href="/hp/sv/support" class="text-sm leading-6 text-gray-600">Kontakta oss</a>
              </li>

              <li>
                <a href="https://changelog.kaddio.com" target="_blank" rel="noreferrer" class="text-sm leading-6 text-gray-600">Changelog</a>
              </li>

              <li>
                <a href="https://github.com/kaddio/documentation/wiki/Kaddio-GraphQL-API" target="_blank" rel="noreferrer" class="text-sm leading-6 text-gray-600">Developer API</a>
              </li>
          </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-gray-600">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="/hp/en/page/about-us" class="text-sm leading-6 text-gray-600">About us</a>
              </li>
  
              <!-- <li>
                <a href="/hp/en/page/career" class="text-sm leading-6 text-gray-600">Lediga tjänster</a>
              </li> -->

              <!-- <li>
                <a href="/hp/en/page/partners" class="text-sm leading-6 text-gray-600">Partners</a>
              </li> -->

              <!-- <li>
                <a href="/hp/en/page/press" class="text-sm leading-6 text-gray-600">Press</a>
              </li> -->

            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-gray-600">Avtal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="/hp/sv/page/tos" class="text-sm leading-6 text-gray-600">Användarvillkor</a>
              </li>

              <li>
                <a href="/hp/sv/page/privacy" class="text-sm leading-6 text-gray-600">Sekretesspolicy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 border-t border-gray/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
      <div>
        <h3 class="text-sm font-semibold leading-6 text-gray-600">Språk och region</h3>
        <p class="mt-2 text-sm leading-6 text-gray-600">Kaddio finns anpassat för flera länder och regioner. Välj Region och språk här.</p>
      </div>
      <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
        <label for="location" class="sr-only">Region</label>
        <select on:change={(v) => changeRegion(v)} id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6">
          <option value="se" lang="sv">Sverige</option>
          <option value="es" lang="es">España</option>
          <option value="en" lang="en">Global</option>
        </select>
      </form>
    </div>


    <div class="mt-8 border-t border-gray/10 pt-8 md:flex md:items-center md:justify-between">
      <!-- <div class="flex space-x-6 md:order-2">

        <a href="https://www.instagram.com/kaddioapp/" target="_blank" rel="noreferrer" class="text-gray-500">
          <span class="sr-only">Instagram</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
          </svg>
        </a>

        <a href="https://github.com/kaddio" target="_blank" rel="noreferrer" class="text-gray-500">
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </div> -->
      <p class="mt-8 text-xs leading-5 text-gray-600 md:order-1 md:mt-0">&copy; 2023 Kaddio AB. All rights reserved.</p>
    </div>
  </div>
</footer>

