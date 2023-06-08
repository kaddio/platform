<script lang="ts">
	import { getContext } from "svelte";
	import { _, token } from "$lib/stores";

</script>

{#if $token?.type == 'referrerLegacyVersion'}
    <div class="flex items-center gap-x-6 bg-oldpink px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p class="text-sm leading-6 text-white">
        <a href="/en/referral_"><strong class="font-semibold">Kaddio is recommended</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Learn more&nbsp;<span aria-hidden="true">&rarr;</span></a>
        <!-- <a href="/en/referral"><strong class="font-semibold">You are surfing on a special link from {$token.name} "Massörernas yrkesförbund"</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Learn more&nbsp;<span aria-hidden="true">&rarr;</span></a> -->
        </p>
        <div class="flex flex-1 justify-end">
        <!-- <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span class="sr-only">Dismiss</span>
            <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </button> -->
        </div>
    </div>
{/if}


{#if $token?.type == 'referrer'}
    <div class="flex items-center gap-x-6 bg-oldpink px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p class="text-sm leading-6 text-white">
        <a href="/en/referral"><strong class="font-semibold">Recommended by {$token.firstname}</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Learn more&nbsp;<span aria-hidden="true">&rarr;</span></a>
        <!-- <a href="/en/referral"><strong class="font-semibold">You are surfing on a special link from {$token.name} "Massörernas yrkesförbund"</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Learn more&nbsp;<span aria-hidden="true">&rarr;</span></a> -->
        </p>
        <div class="flex flex-1 justify-end">
        <!-- <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span class="sr-only">Dismiss</span>
            <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </button> -->
        </div>
    </div>
{/if}

{#if $token?.type == 'coupon'}
    <div class="flex items-center gap-x-6 bg-oldpink px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p class="text-sm leading-6 text-white">
        <a href="/en/coupon"><strong class="font-semibold">Coupon link<svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>{$token.name}</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Learn more&nbsp;<span aria-hidden="true">&rarr;</span></a>
        <!-- <a href="/en/referral"><strong class="font-semibold">You are surfing on a special link from {$token.name} "Massörernas yrkesförbund"</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Learn more&nbsp;<span aria-hidden="true">&rarr;</span></a> -->
        </p>
        <div class="flex flex-1 justify-end">
        <!-- <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span class="sr-only">Dismiss</span>
            <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </button> -->
        </div>
    </div>
{/if}