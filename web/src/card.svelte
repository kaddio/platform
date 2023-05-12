<script lang="ts">
    
</script>

<div class="kd-card">
    <slot></slot>
</div>

<style lang="less">

    .kd-card {
        background: white;
        // box-shadow-md();
        padding: 1rem;
        border-radius: 4px;
        transition: all .2s ease;
        box-shadow: 0 4px 10px -4px rgba(0,0,0,.2);
        border: 1px solid var(--gray-800);
    }
</style>