<script lang="ts">
	import { page } from "$app/stores";
    import { imageHandler } from "$lib/img";
	import { _ } from "$lib/stores";
	import OrgChooserOrgSection from "./org-chooser-org-section.svelte";

    //      <OrgChooserOrgSection name={org.name} url={org.url} roles={org.roles} logoUrl={'https://kaddio.com/cdn-cgi/image/width=256,fit=contain,format=auto,metadata=none,quality=80,anim=false/' + org.logoUrl} />
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src={imageHandler("/img/kaddio-black.png", {format: "auto"})} alt="Kaddio logo">

        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {$_('Välj organisation')}
        </h2>
    </div>

    <ul class="mt-10 divide-y divide-gray-100">

        
        {#each $page.data.orgs as org}
            <OrgChooserOrgSection name={org.name} url={org.url} roles={org.roles} logoUrl={'' + org.logoUrl} />
            
        {/each}

    </ul>

</div>