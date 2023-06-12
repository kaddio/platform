<script lang="ts">
	import { enhance } from '$app/forms';
    export let data;
    export let form;
</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<form class="space-y-6" use:enhance method="POST">
    <input type="hidden" name="device" value="otherDevice" />
    <div>
        <button type="submit">Betala med swish på annan enhet</button>
    </div>
</form>

<form class="space-y-6" use:enhance method="POST">
    <input type="hidden" name="device" value="sameDevice" />
    <div>
        <button type="submit">Betala med swish på denna enhet</button>
    </div>
</form>	


<br />

{JSON.stringify(data)}

<br />

{JSON.stringify(form)}

