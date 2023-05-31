<script lang="ts">
    export let state: boolean = false;
</script>

<div class="flex gap-x-4 sm:col-span-2">
    <div class="flex h-6 items-center">
        <button on:click={() => (state = !state)} type="button" class="{state ? 'bg-oldpink' : 'bg-gray-200'} flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
        <span class="sr-only">Agree to policies</span>
        <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
        <span aria-hidden="true" class="{state ? 'translate-x-3.5' : 'translate-x-0'} h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
        </button>
    </div>
    <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
        <slot name="label"></slot>
    </label>
</div>
