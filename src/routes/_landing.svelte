<script>
  let sy = 0;
</script>

<style>
  #hero {
    height: 600px;
    background-image: url("/landing/discover.jpg");
    background-size: cover;
    background-position: center;
  }
</style>

<svelte:window bind:scrollY={sy} />
<section id="hero" style="background-position-y: {sy / 2}px" />
