<script lang="ts">
	import { onMount } from "svelte";

    import Typed from 'typed.js';

    let stringsEl: HTMLElement;
    let span: HTMLSpanElement;

    onMount(function() {
        new Typed(span, {
            stringsElement: stringsEl,
            showCursor: false,
            fadeOut: false,
            typeSpeed: 45,
            backDelay: 1200  ,      
            backSpeed: 15,
            startDelay: 1000,
            loop: true,
            smartBackspace: true,
        })
    })

</script>
<span bind:this={span}></span>
<div bind:this={stringsEl} style="display:none">
<slot>
</slot>
</div>