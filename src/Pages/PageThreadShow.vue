<template>
<div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="posts" />
</div>
</template>

<script>
import sourceDate from "@/data";
import PostList from '@/components/PostList'

export default {
    components: {
        PostList
    },
    props: {
        id: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            thread: sourceDate.threads[this.id],
            posts: sourceDate.posts,
            users: sourceDate.users
        };
    },
    computed: {
        posts() {
            const postIds = Object.values(this.thread.posts)
            return Object.values(sourceData.posts)
                .filter(post => postIds.includes(post['.key']))
        }
    }
}
</script>
