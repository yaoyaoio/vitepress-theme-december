<template>
  <Page :posts="posts"/>
</template>

<script setup lang="ts">
import {usePosts} from "../composables/post";

const posts = usePosts();
import Page from "./Page.vue";
</script>

<style scoped>

</style>
