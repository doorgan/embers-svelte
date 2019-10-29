<script>
  import { auth_data } from "auth/store.js";
  import Landing from "./_landing.svelte";
</script>

<svelte:head>
  <title>Embers</title>
</svelte:head>
<section id="hero">
  {#if $auth_data.user}
    <h1>Hola @{$auth_data.user.username}</h1>
  {:else}
    <Landing />
  {/if}
</section>
