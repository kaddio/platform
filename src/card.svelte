<script lang="ts">
    export let g = 1;
</script>

<div class="kd-card">
    <slot></slot>
</div>

<style lang="less">
    @white: white;
    .kd-card {
        background: @white;
    }
</style>