<script lang="ts">
    export let variant: string = 'green';
</script>

<div class={variant + " tight feature-highlight-card feature-highlight-card--hero"}>
    <span class="feature-highlight-card__text">
        <slot></slot>
    </span>
</div>

<style lang="scss">
    
    .green{
        background: #81E481 linear-gradient(to top right,#81E481,#FCFC83);
        color: #008A7E;
    }

    .pink{
        background: #9BF linear-gradient(to top left, #9BF, #FFDBF3);
        color: #6345A1;
    }

    $breakpoints: (
        xs: 576px,
        sm: 768px,
        md: 992px,
        lg: 1200px
    );
    .feature-highlight-card {
        padding: 30px;
        border-radius: var(--border-radius);
        box-shadow: 0 7px 30px -10px rgba(rgb(150,170,180), .5);

        @media (min-width: map-get($breakpoints, sm)) {
            padding: 30px 120px;
        }    

        &--hero {
            position: relative;
            margin-top: -30px;
            margin-bottom: 60px;

            padding: var(--gap);
        }
    }

    .feature-highlight-card__text {
        font-size: 16px;
        line-height: 1.5;

        @media (min-width: map-get($breakpoints, sm)) {
            font-size: 18px;
            line-height: 1.6;
        }    
    }

</style>