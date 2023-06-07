<script lang="ts">
    export let dialog;
</script>
<dialog bind:this={dialog} class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
    
    <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span class="sr-only">Close</span>
        <a on:click={()=>dialog.close()}><i class="fa fa-times fa-lg"></i></a>
        </button>
    </div>
    
    <slot></slot>
    
    
</dialog>

<style>
	dialog::backdrop {
        background: rgba(0,0,0,0.7);
        /* animation: fade-in .4s; */
    }

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>