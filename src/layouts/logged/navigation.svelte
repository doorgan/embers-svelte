<script>
  import Vertical from "./navigation/vertical.svelte";
  import Mobile from "./navigation/mobile.svelte";
  import Placeholder from "./navigation/placeholder.svelte";

  let viewport_width;
  let component;

  $: if (viewport_width > 644) {
    component = Vertical;
  }
  $: if (viewport_width <= 644) {
    component = Mobile;
  }
  $: if (!viewport_width) {
    component = Placeholder;
  }
</script>

<style>
  nav {
    background: var(--navigation-bg);
    color: var(--navigation-color);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: var(--navigation-width);

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<svelte:window bind:innerWidth={viewport_width} />

<nav>
  <svelte:component this={component} />
</nav>
