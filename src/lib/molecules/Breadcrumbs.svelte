<script>
  export let breadcrumbs
</script>

<ul class="breadcrumbs">
  {#each breakcrumbs as breadcrumb,index (index)}
    {#if index<breakcrumbs.length-1}
      <li><a href="">{breadcrumb}</a></li>
    {:else}
      <li>{breadcrumb}</li>
    {/if}
  {/each}
</ul>