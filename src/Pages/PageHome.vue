<template>
  <div class="col-full">
      <h1>Welcome to the forum</h1>
      <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import sourceDate from "@/data";
import ThreadList from '@/components/ThreadList'

console.log(sourceDate);

export default {
  
  components: {
      ThreadList
  },

  data() {
    return {
      threads: Object.values(sourceDate.threads),
      posts: sourceDate.posts,
      users: sourceDate.users
    };
  }
};
</script>

