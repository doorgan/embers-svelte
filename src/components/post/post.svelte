<script>
  import Avatar from "../avatar.svelte";
  export let post;
</script>

<style>
  article {
    background: var(--primary);
    border: var(--border);
    border-color: var(--border-color);
    border-radius: 2px;
    box-shadow: var(--box-shadow);
  }
</style>

<article>
  <header>
    <Avatar avatar={post.user.avatar.small} />
  </header>
  <div class="post-body">
    <p>{post.body}</p>
  </div>
</article>
