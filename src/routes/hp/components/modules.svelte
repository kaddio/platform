<div class="container">
    <div class="presentation-grid">
        <slot>

        </slot>
    </div>
</div>

<style lang="scss">
    .presentation-grid {
        display: flex;
        align-items:flex-start;
        flex-direction: row;
        gap: 5%;
        flex-wrap: wrap;
        width: 100%;
        padding: 7rem 0;
    }

</style>