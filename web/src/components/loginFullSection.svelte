<script lang="ts">
	import { getContext } from "svelte";
	import { _ } from "$lib/stores";
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
    import { imageHandler } from "$lib/img";

    const lang = getContext("lang");
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src={imageHandler("/img/kaddio-black.png", {format: "auto"})} alt="Kaddio logo">

        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            { $_('Logga in')}
        </h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" use:enhance method="POST">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{ $_('E-post')}</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>
    
            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>

                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>            

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-oldpink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
        </form>

        {#if $page.form?.wrongCredentials}
            <div class="rounded-md bg-red-50 p-4 mt-10">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div class="ml-3">
                        <h3 class="text-sm font-medium text-red-800">Felaktiga uppgifter.</h3>
                    </div>
                </div>
            </div>
        {/if}

        {JSON.stringify($page)}

      <p class="mt-10 text-center text-sm text-gray-500">
        eller 
        <a href="/{lang}/create" class="font-semibold leading-6 text-oldpink hover:text-oldpinkdarker">skapa ett konto</a>
      </p>
    </div>
  </div>
  