<script>
  /**
   * @type {string}
   */
  export let as; 
  /**
	 * @type {any}
	 */
   export let url;
  /**
	 * @type {()=>void}
	 */
   export let cb;
  /**
	 * @type {any}
	 */
  export let content;
</script>

{#if as === 'anchor'}
  <a href={url} on:click|once={() => cb()}>{content}</a>
{:else}
  <button on:click={()=>cb()}>{content}</button>
{/if}