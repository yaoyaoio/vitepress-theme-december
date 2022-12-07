import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type {EnhanceAppContext} from 'vitepress'
import Layout from '../../lib/client/components/Layout.vue'
import Archives from "../../lib/client/components/Archives.vue";
import Home from "../../lib/client/components/Home.vue";
import '../../lib/client/styles/custom.css'
import {setPosts} from "./composables";


function setupPosts(ctx: EnhanceAppContext) {
  const posts = ctx.siteData.value.themeConfig.posts
  setPosts(ctx.app, posts)
}

export const DecemberTheme: Theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp({app, router, siteData}: EnhanceAppContext) {
    DefaultTheme.enhanceApp({app, router, siteData})
    setupPosts({app, router, siteData})
    app.component('Archives', Archives)
    app.component("Home", Home)
  }
}
