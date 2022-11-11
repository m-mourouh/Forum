<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="col-full push-top">
    <div class="forum-header">
        <div class="forum-details">
            <h1>{{forum.name}}</h1>
            <p class="text-lead">{{forum.descroption}}</p>
        </div>
        <a class="btn-green btn-small">Start new Thread</a>
    </div>
  </div>
  <div class="col-full push-top">
        <ThreadList :threads="threads" />
  </div>
</template>

<script>
import ThreadList from "../components/ThreadListView" 

export default {
    components: {
      ThreadList,
    },
    props: {
      id: {
        required: true ,
        type: String 
      }
    },
    computed: {
      forum(){
          return this.$store.state.forums.find(forum => forum.id === this.id)
      },
      threads(){
          return this.$store.state.threads.filter(thread => thread.forumId === this.id)
      },
    }
}
</script>


<style>

</style>