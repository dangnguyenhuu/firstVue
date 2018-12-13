<template>
    <div>
        
    </div>
</template>

<script>
import {mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions(['fetchCurrentPost'])
        },

        created() {
        this.fetchCurrentPost()
            .then(category => {
                console.log(category)
            })
        }
    }
</script>

<style scoped>

</style>