<script lang="ts">
	import { getContext } from "svelte";
	import { _ } from "$lib/stores";
	import Referral from "./referral-banner.svelte";
	import LangBanner from "./lang-banner.svelte";
	import StatusBanner from "./status-banner.svelte";
    import Header from "./header.svelte";
  const lang = getContext('lang');

  let show = false;

  function clickOutside(node){
    const handleClick = (event) => {
      if(!node.contains(event.target)){
        node.dispatchEvent(new CustomEvent('outclick'));
      }
    }

    document.addEventListener("click", handleClick, true);
  }

  export let darkHeader: boolean = false;

</script>

<Header darkHeader={darkHeader} />
