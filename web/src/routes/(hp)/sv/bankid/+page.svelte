<script lang="ts">
	import { enhance } from "$app/forms";
	import { invalidate } from "$app/navigation";
	import { page } from "$app/stores";
	import Qr from "$components/qr.svelte";
	import { onMount, setContext } from "svelte";
	setContext('lang', 'sv');

	onMount(() => {
		let interval;

		interval = setInterval(() => {
			invalidate('app:bankid');
		}, 2000);
	});

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

{#if !$page.data.bankid?.status}
	<form class="space-y-6" use:enhance method="POST">
		<input type="hidden" name="device" value="otherDevice" />
		<div>
			<button type="submit">Bankid on other device (qr)</button>
		</div>
	</form>

	<form class="space-y-6" use:enhance method="POST">
		<input type="hidden" name="device" value="sameDevice" />
		<div>
			<button type="submit">BankID on same device</button>
		</div>
	</form>	
{:else}
	<form class="space-y-6" use:enhance method="POST">
		<input type="hidden" name="cancel" value="1" />
		<div>
			<button type="submit">Cancel</button>
		</div>
	</form>	
{/if}


{JSON.stringify($page.data)}

{#if $page.data?.qr}
	<Qr str={$page.data.qr} />	
{/if}

