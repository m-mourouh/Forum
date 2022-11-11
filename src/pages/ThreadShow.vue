<template>
  <div class="col-large push-top" v-if="thread">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
  <div v-else class="col-full text-center">No Thread found</div>
</template>

<script>
import PostList from "../components/PostList.vue";
import PostEditor from "../components/PostEditor.vue";
export default {
  components: {
    PostEditor,
    PostList,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // threads : this.$store.state.threads,
      // posts: this.$store.state.posts,
      // users: this.$store.state.users,
      newPostText: "",
    };
  },
  computed: {
    thread() {
      // return this.threads.find(thread => thread.id === this.$route.params.id) //without props
      // eslint-disable-next-line no-undef
      return this.$store.state.threads.find((thread) => thread.id === this.id); //with props
    },

    threadPosts() {
      return this.$store.state.posts.filter((p) => p.threadId === this.id);
    },
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
    threads() {
      return this.$store.state.threads;
    },
  },
  methods: {
    addPost({ post }) {
      post.threadId = this.id;
      this.$store.dispatch("createPost",post);
    },
  },
};
</script>

<style></style>
