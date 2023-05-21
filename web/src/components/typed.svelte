<script lang="ts">
	import { onMount } from "svelte";

    import Typed from 'typed.js';

    let stringsEl: HTMLElement;
    let p: HTMLParagraphElement;

    onMount(function() {
        new Typed(p, {
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
<p bind:this={p} style="height: 2em; margin: 0"></p>
<div bind:this={stringsEl} style="display:none">
<slot>
</slot>
</div>