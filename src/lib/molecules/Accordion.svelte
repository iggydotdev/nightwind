<script>
  export let title
  export let content
  let isExpanded = false;
</script>



<div class='accordion-header' aria-expanded=isExpanded>{title}</div>
<div class='accordion-content'>{content}</div>