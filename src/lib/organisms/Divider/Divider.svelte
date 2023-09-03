<script>
  export let icon;
</script>
{#if !icon || icon == false}
  <hr class="divider"/>
{:else}
  <div class="divider"><hr/><span>X</span></div>
{/if}

<style>
  hr {
    margin: 0;
  }
  div {
    position: relative;
    height: 10px;
  }
  div hr {
    margin: 0;
    position: absolute;
    top: 50%;
    width: 100%;
  }
  div span {
      position: absolute;
      background: white;
      top: calc(50% - 8px);
      left: calc(50% - 8px); 
    }
  

</style>