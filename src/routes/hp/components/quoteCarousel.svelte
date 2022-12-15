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

<section id="testimonials">
    <div>
        <div class="banner" bind:this={unslider} >
            <ul>
                <slot>

                </slot>
            </ul>    
        </div>
    </div>
</section>

<style>
    #testimonials {
        padding-top: 5em;
        padding-bottom: 3rem;
    }

    .banner {
        margin: 0 auto;
        max-width: 700px;
    }
</style>