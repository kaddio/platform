<script lang="ts">
    export let variant: string = 'green';
</script>

<div class={variant + " tight feature-highlight-card feature-highlight-card--hero"}>
    <span class="feature-highlight-card__text">
        <slot></slot>
    </span>
</div>

<style>
    .green{
        background: #81E481 linear-gradient(to top right,#81E481,#FCFC83);
        color: #008A7E;
    }

    .pink{
        background: #9BF linear-gradient(to top left, #9BF, #FFDBF3);
        color: #6345A1;
    }

</style>