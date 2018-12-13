<template>
<div v-if="asyncDataStatus_ready" class="col-full push-top">
    <h1>Welcome to the DevLog</h1>
    <a href="https://gulliverconnect.page.link/v3RN">Deep Link</a>
    <CategoryList :categories="categories" />
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";
import CategoryList from "@/components/CategoryList";

export default {
    mixins: [asyncDataStatus],

    components: {
        CategoryList
    },

    computed: {
        categories() {
            return Object.values(this.$store.state.categories);
        }
    },

    methods: {
        ...mapActions(["fetchAllCategories", "fetchForums"])
    },

    created() {
        this.fetchAllCategories()
            .then(categories =>Promise.all( categories.map(category => this.fetchForums({ ids: Object.keys(category.forums) }) )))
            .then(() => { this.asyncDataStatus_fetched() });
    }
};
</script>
