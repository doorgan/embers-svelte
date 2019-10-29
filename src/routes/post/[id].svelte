<script context="module">
  export async function preload({ params }) {
    const { id } = params;
    const res = await this.fetch(`/api/posts/${id}`, {
      credentials: "include"
    });
    const data = await res.json();

    return {
      post: data
    };
  }
</script>

<script>
  import Post from "../../components/post/post.svelte";

  export let post;
</script>

<style>
  #post-details {
    padding: 20px;
  }
</style>

<section id="post-details">
  <Post {post} />
</section>
