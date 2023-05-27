<script lang="ts">
	import { getContext } from "svelte";
	import { _ } from "$lib/stores";
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
    const lang = getContext('lang');

    let authMethod: string;

    const sendSms = function(){
        console.log('Skickar sms');
        smsIsSent = true;
    }

    const sendEmail = function(){
        console.log('Skickar email');
        emailIsSent = true;
    }

    let verifyState = false;
    let smsIsSent: boolean = false;
    let emailIsSent: boolean = false;

    const preferredMethod; // Save this in localStorage
    
    $: verifyState = $page.form?.verified?.email && $page.form?.verified?.password && $page.form?.mustVerifyWithOneOf;

</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/img/kaddio-black.png" alt="Kaddio logo">

        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {#if verifyState}
                Verify your identity
            {:else}
                Sign in
            {/if}
        </h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" use:enhance method="POST">

        {#if !$page.form?.mustVerifyWithOneOf}

            <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
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
        {/if}

        {JSON.stringify($page)}

        {#if $page.form?.mustVerifyWithOneOf}
            <div>
                <label for="authMethod" class="block text-sm font-medium leading-6 text-gray-900">Authentication method</label>
                <select id="authMethod" bind:value={authMethod} name="authMethod" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option selected value="sms">SMS</option>
                    <option value="totp">Authenticator</option>
                    <option value="email">Email</option>
                    <option value="webauthn">Build in a authenticator</option>
                </select>
            </div>

            {#if authMethod == 'sms'}
                {#if smsIsSent}
                    A verification code has been sent to d...d@kaddio.com. Enter the code to continue and be redirected.
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="verify-sms" class="block text-sm font-medium leading-6 text-gray-900">Code</label>
                        </div>

                        <div class="mt-2">
                            <input id="verify-sms" name="verify-sms" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verify</button>
                    </div>

                {:else}
                    <p class="mt-3 text-sm leading-6 text-gray-600">An sms will be sent to your phone.</p>

                    <button type="button" on:click={sendSms} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send code</button>
                {/if}
            {/if}

            {#if authMethod == 'totp'}
                <div>
                    <div class="flex items-center justify-between">
                        <label for="verify-totp" class="block text-sm font-medium leading-6 text-gray-900">Code</label>
                    </div>

                    <div class="mt-2">
                        <input id="verify-totp" name="verify-totp" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
            {/if}


            {#if authMethod == 'email'}
                {#if emailIsSent}
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="verify-sms" class="block text-sm font-medium leading-6 text-gray-900">Code</label>
                        </div>

                        <div class="mt-2">
                            <input id="verify-sms" name="verify-sms" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
       
                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verify</button>
                    </div>
                {:else}
                    <p class="mt-3 text-sm leading-6 text-gray-600">An email will be sent to your inbox.</p>

                    <button type="button" on:click={sendEmail} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send code</button>
                {/if}
            {/if}

        {/if}
  
        {#if !verifyState}
            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
        {/if}
      </form>
  
      <p class="mt-10 text-center text-sm text-gray-500">
        eller 
        <a href="#" class="font-semibold leading-6 text-oldpink hover:text-oldpinkdarker">skapa ett konto</a>
      </p>
    </div>
  </div>
  