<script context="module">
  import { auth_data } from "auth/store.js";
  export async function preload({ params, query }) {
    const res = await this.fetch(`/auth_data`, {
      credentials: "include"
    });
    const data = await res.json();

    auth_data.update(x => (x = data));
  }
</script>

<script>
  import Guest from "../layouts/guest.svelte";
  import Logged from "../layouts/logged.svelte";

  let layout = $auth_data.logged_in ? Logged : Guest;

  export let segment;
</script>

<style lang="scss" global>
  @import "./styles/global.scss";
</style>

<svelte:component this={layout}>
  <slot />
</svelte:component>
