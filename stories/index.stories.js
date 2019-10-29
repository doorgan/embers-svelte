import Post from '../src/components/post/post.svelte';

const post_data = {
  body: "Hola mundo!"
}

export default {
  title: "Post"
};

export const text = () => ({
  Component: Post,
  props: {
    post: post_data
  },
});