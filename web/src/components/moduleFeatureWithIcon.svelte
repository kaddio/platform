<script lang="ts">
  export let icon: string;
</script>

  <div class="relative pl-9">
    <dt class="inline font-semibold text-gray-900">
      <i class="fa fa-fw fa-lg fa-{icon} absolute left-1 top-3 h-5 w-5 text-oldpink"></i>
      <slot name="title" />
    </dt>
    <dd class="inline">
      <slot name="body" />
    </dd>
  </div>