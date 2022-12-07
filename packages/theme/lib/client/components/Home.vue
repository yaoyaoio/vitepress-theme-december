<template>
  <Page :posts="posts"/>
</template>

<script setup lang="ts">
import {usePosts} from "../../../src/client/composables";

const posts = usePosts();
import Page from "./Page.vue";
</script>

<style scoped>

</style>
