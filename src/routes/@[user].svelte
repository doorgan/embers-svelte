<script context="module">
  export async function preload({ params }) {
    return { username: params.user };
  }
</script>

<script>
  export let username;
</script>

<h1>Hello, {username}!</h1>
