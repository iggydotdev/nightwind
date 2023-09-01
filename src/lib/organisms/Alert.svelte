<script>
  export let dismissable, heading, content;
</script>

<div>
  {#if dismissable}
  <a class="uk-alert-close" uk-close></a>
  {/if}
  <h3>{heading}</h3>
  <p>{content}</p>
</div>


