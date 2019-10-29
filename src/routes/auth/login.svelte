<script>
  import * as api from "api.js";
  import { goto } from "@sapper/app";
  import { auth_data } from "auth/store.js";
  let id = "";
  let password = "";

  let error;

  const login = async () => {
    error = null;
    const res = await api.post("api/v1/auth", { id, password });
    if (res.error) {
      error = res.error;
      return;
    }

    location.href = "/";
  };
</script>

{#if error}
  <div>{error}</div>
{/if}

<form action="auth/login" method="POST" on:submit|preventDefault={login}>
  <input type="hidden" name="_csrf_token" value={$auth_data.csrf_token} />
  <input
    type="text"
    name="id"
    bind:value={id}
    placeholder="Email o nombre de usuario" />
  <input
    type="password"
    name="password"
    bind:value={password}
    placeholder="contraseña" />
  <input type="submit" value="Iniciar sesión" />
</form>
