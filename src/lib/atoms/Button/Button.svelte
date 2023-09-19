<script>
  /**
   * @type {string}
   */
  export let as, url, cb, content;
</script>

{#if as === 'anchor'}
  <a href={url} on:click|once={() => cb()}>{content}</a>
{:else}
  <button on:click={()=>cb()}>{content}</button>
{/if}