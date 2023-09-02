<script>
  export let title
  export let content
  let isExpanded = false;

  const toggle = ()=>{isExpanded = !isExpanded}

</script>



<div class='accordion-header' on:click={toggle} aria-expanded={isExpanded}>{title}</div>
{#if isExpanded === true }
  <div class='accordion-content'>{content}</div>
{/if}