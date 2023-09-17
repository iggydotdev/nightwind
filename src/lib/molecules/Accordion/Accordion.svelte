<script>
  export let title
  export let content
  let isExpanded = false;

  const toggle = ()=>{isExpanded = !isExpanded}

</script>



<details class='accordion-header'>
  <summary>{title}</summary>
  {#if content}
  <div class='accordion-content'>{content}</div>
  {:else}
  <div class='accordion-content'> <slot/></div>
  {/if}
</details>

<style>
  details > summary { transition: color 1s; color: black;}
  details[open] > summary { color: red;}
 </style>