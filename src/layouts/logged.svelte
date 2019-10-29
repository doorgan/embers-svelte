<script>
  import Navigation from "./logged/navigation.svelte";
  import Sidebar from "./logged/sidebar.svelte";
</script>

<style>
  #app {
    display: flex;
    margin-left: var(--navigation-width);
    min-height: 100vh;
  }

  main {
    background: var(--bg);
    flex: 1 auto;
  }
</style>

<div id="app">
  <Navigation />

  <Sidebar />

  <main>
    <slot />
  </main>
</div>
