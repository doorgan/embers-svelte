<script>
  import * as api from "api.js";
  import { auth_data } from "auth/store.js";
  import svg from "../svg/logo.svg";

  function data() {
    return { svg };
  }

  export let segment;

  const logout = async () => {
    await api.del("sessions");
    location.href = "/";
  };
</script>

<style>
  nav {
    background: var(--top-nav-bg);
    color: var(--color);
    box-sizing: border-box;
    padding: 0 10px;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 70px;
    border-bottom: 4px solid;
    border-color: #ffffff0d;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav ul {
    display: flex;
    align-items: center;
  }

  nav ul li {
    margin: 0 5px;
  }

  nav ul a {
    text-transform: uppercase;
    color: var(--text-secondary);
    cursor: pointer;
    white-space: nowrap;
    font-size: 14px;
  }

  nav ul a:hover {
    color: var(--text);
  }

  #logo {
    width: 32px;
    height: 32px;
  }

  :global(#logo svg path) {
    fill: var(--logo-color);
  }
</style>

<nav>
  <h1 id="logo">
    <a href="/">
      {@html svg}
    </a>
  </h1>
  <ul>
    <li>
      <a href="/auth/register" class="button button-medium">Registrarme</a>
    </li>
    <li>
      <a href="/auth/login">Iniciar Sesion</a>
    </li>
  </ul>
</nav>
