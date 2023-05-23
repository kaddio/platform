<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type SelectOption = {
    value: any,
    optgroup: string,
    label: string
  }
  
  const dispatch = createEventDispatcher();

  export let optionsFn : (query: string) => Promise<SelectOption[]>;
  export let debounce: number = 0;
  export let placeholder: string = "";
  let options: SelectOption[] = [];
  let selectedOption = null;
  let inputValue = "";
  let open = false;
  $: highlightedIndex = undefined;
  $: {
      optionsFn(inputValue).then(
        optionss => {
          open = true;
          options = optionss
        }
      )
      
  }
  const selectOption = function(option: SelectOption) {
    inputValue = option.label;
    selectedOption = option;
    open = false;
    dispatch("selected", option.value)
  }
  // const highlightedOption = function() {
  //   return options.find(o => o.value == highlightedValue)
  // }
  // const highlightNext = function() {
  //   return options.find(o => o.value == highlightedValue)
  // }
  // const highlightPrev = function() {
  //   return options.find(o => o.value == highlightedValue)
  // }

  const navigateList = (e) => {
    if(e.key === "Escape") {
      open = false;
    }
    if (e.key === "ArrowDown" && highlightedIndex <= options.length-1) {
        highlightedIndex === undefined ? highlightedIndex = 0 : highlightedIndex += 1
    } else if (e.key === "ArrowUp" && highlightedIndex !== undefined) {
        highlightedIndex === 0 ? highlightedIndex = options.length-1 : highlightedIndex -= 1
    } else if (e.key === "Enter") {
        selectOption(options[highlightedIndex]);
    } else {
        return;
    }
  }


</script>
<svelte:window on:keydown={navigateList} />
<div class="relative inline-block text-left">
  <div>
    <input type="search" bind:value={inputValue} placeholder="{placeholder}">
    <!-- <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button> -->
  </div>

  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  {#if options.length > 0 && open}
    <div class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        {#each options as option, ix}
          <a href="#" class:highlighted={ix===highlightedIndex} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0" on:click={selectOption(option)}>{option.label}</a>
        {/each}
      </div>
    </div>
  
{/if}
</div>

<style>
  .highlighted {
    background: #ccc;
  }
</style>