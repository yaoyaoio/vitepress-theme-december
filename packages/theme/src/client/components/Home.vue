<template>
  <Page :posts="posts"/>
</template>

<script setup lang="ts">
import {useData} from "vitepress";

const {theme} = useData();
const {posts} = theme.value
import Page from "./Page.vue";
</script>

<style scoped>

</style>
