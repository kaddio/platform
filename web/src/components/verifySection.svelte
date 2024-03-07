<script lang="ts">
	import { getContext } from "svelte";
	import { _ } from "$lib/stores";
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
    const lang = getContext('lang');
    let authMethod: string;
    import { imageHandler } from "$lib/img";

</script>


<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src={imageHandler("/img/kaddio-black.png", {format: "auto"})} alt="Kaddio logo">

        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {$_('Verifiera identitet')}
        </h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" use:enhance method="POST">
        
        {JSON.stringify($page)}

        <div>
            <label for="authMethod" class="block text-sm font-medium leading-6 text-gray-900">Authentication method</label>
            <select id="authMethod" bind:value={authMethod} name="authMethod" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-oldpink sm:text-sm sm:leading-6">
                <option disabled={!$page.data.mustVerifyWithOneOf.sms || null} value="sms">SMS</option>
                <option disabled={!$page.data.mustVerifyWithOneOf.totp || null} value="totp">Authenticator</option>
                <option disabled={!$page.data.mustVerifyWithOneOf.email || null} value="email">Email</option>
                <option disabled={!$page.data.mustVerifyWithOneOf.webauthn || null} value="webauthn">Built in authenticator</option>
            </select>
        </div>


        {#if authMethod == 'sms'}
            {#if $page.form?.codeIsSent}
                A verification code has been sent to your phone. Enter the code to continue and be redirected. For test use 1234

                <div>
                    <div class="flex items-center justify-between">
                        <label for="verify-sms" class="block text-sm font-medium leading-6 text-gray-900">Code</label>
                    </div>

                    <div class="mt-2">
                        <input id="verify-sms" name="verify-sms" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-oldpink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">Verify</button>
                </div>

            {:else}
                <p class="mt-3 text-sm leading-6 text-gray-600">
                    Send an authentication code to device ending in nnn.
                </p>

                <input type="hidden" name="sendSms" value="1" />

                <button type="submit" class="flex w-full justify-center rounded-md bg-oldpink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">Send code</button>
            {/if}
        {/if}

        {#if authMethod == 'totp'}
            <div>
                <div class="flex items-center justify-between">
                    <label for="verify-totp" class="block text-sm font-medium leading-6 text-gray-900">Code</label>
                </div>

                <div class="mt-2">
                    <input id="verify-totp" name="verify-totp" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
                </div>
            </div>
        {/if}


        {#if authMethod == 'email'}
            {#if $page.form?.codeIsSent}
                A verification code has been sent to your email. Enter the code to continue and be redirected. For test use 1234

                <div>
                    <div class="flex items-center justify-between">
                        <label for="verify-sms" class="block text-sm font-medium leading-6 text-gray-900">Code</label>
                    </div>

                    <div class="mt-2">
                        <input id="verify-sms" name="verify-sms" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-oldpink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">Verify</button>
                </div>

            {:else}
                <p class="mt-3 text-sm leading-6 text-gray-600">
                    Send a verification code to your email
                </p>

                <input type="hidden" name="sendEmail" value="1" />

                <button type="submit" class="flex w-full justify-center rounded-md bg-oldpink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">Send code</button>
            {/if}
        {/if}

    </form>


    </div>
  </div>
  