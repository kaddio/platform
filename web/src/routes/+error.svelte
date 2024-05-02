<script>
    import '/src/app.css';
    import { page } from '$app/stores';
    import { setContext, getContext } from 'svelte';

    import { _ } from '$lib/stores';

    try{
      const possibleLangFromPath = $page.url.pathname.split('/')[1];

      if(['sv', 'en', 'es'].includes(possibleLangFromPath)){
        setContext('lang', possibleLangFromPath);
      }
      else{
        console.log('inget språk... Använd engelska');
        setContext('lang', 'en');
      }
    } catch (e) {
      console.log('inget språk...');
      // setContext('lang', 'en');

      console.log(e);
    }

    const lang = getContext('lang');

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>


<main class="relative isolate min-h-full">
    <img src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-top">
    <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p class="text-base font-semibold leading-8 text-white">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{$_('Sidan kunde inte hittas')}</h1>
      <p class="mt-4 text-base text-white/70 sm:mt-6">{$_('Ursäkta, men vi kunde inte hitta sidan.')}</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/{lang}/" class="rounded-md bg-purple-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{$_('Tillbaks hem')}</a>
          <a href="/{lang}/support" class="text-sm font-semibold text-white">{$_('Kontakta support')} <span aria-hidden="true">&rarr;</span></a>
        </div>
    </div>
  </main>
  