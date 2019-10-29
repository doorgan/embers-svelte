<script>
  import Nav from "../components/TopNav.svelte";

  export let segment;
</script>

<Nav {segment} />
<main>
  <slot />
</main>
