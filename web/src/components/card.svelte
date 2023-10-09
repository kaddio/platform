<script lang="ts">
    export let className = '';
    export let id = '';
</script>

<div class="rounded border-gray-50 shadow bg-white overflow-hidden {className}" {id}>
    <slot />
</div>
