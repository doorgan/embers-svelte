<script>
  import logo from "../../../svg/logo.svg";

  function data() {
    return { logo };
  }
</script>

<style>
  h1 {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  h1 a {
    width: 35px;
    height: 35px;
  }

  :global(#logo path *) {
    fill: var(--logo-color);
  }
</style>

<h1>
  <a href="/" id="logo">
    {@html logo}
  </a>
</h1>
