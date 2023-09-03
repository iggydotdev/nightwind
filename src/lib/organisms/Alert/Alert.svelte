<script>
  export let dismissable, heading, content;
</script>

<div class="alert">
  {#if dismissable}
  <button class="alert-close">X</button>
  {/if}
  <h3 class="alert-heading">{heading}</h3>
  <p class="alert-content">{content}</p>
</div>


<style>

  

</style>