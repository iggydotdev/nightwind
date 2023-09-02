<script>

export let items; 

</script>


<ul>
  {#each items as item}
    <ListItem>{item}</ListItem>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>