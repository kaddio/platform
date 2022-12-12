<script lang="ts">
	import { onMount } from "svelte";
    let unslider: HTMLElement;
    
    onMount(function() {
        window.$(unslider).unslider({
            autoplay: true,
            delay: 9000,
            arrows: false,
            dots: true
        });
})
</script>

<div class="banner" bind:this={unslider} id="testimonials">
    <ul>
        <slot>

        </slot>
    </ul>    
</div>