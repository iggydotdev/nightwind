<script>
import Header from '$lib/organisms/Header/Header.svelte';
import Footer from '$lib/organisms/Footer/Footer.svelte';
import Divider from '$lib/organisms/Divider/Divider.svelte';
import Accordion from '$lib/molecules/Accordion/Accordion.svelte';
</script>


<Header />
  TEST
  <Accordion title="x">Content</Accordion>
  <Divider icon={false}/>
  Test2
<Footer />


<style>

  body {
    grid-template-areas: '\
    header';
  }

</style>