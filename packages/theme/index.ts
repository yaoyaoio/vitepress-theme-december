import DefaultTheme from 'vitepress/theme'
import {type EnhanceAppContext} from 'vitepress'
import Layout from './Layout.vue'
import Archives from "./components/Archives.vue";
import Home from "./components/Home.vue";
import './styles/custom.css'
import {data} from "./post.data";
import {setPosts} from "./composables/post";


export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({app, router, siteData}: EnhanceAppContext) {
    DefaultTheme.enhanceApp({app, router, siteData})
    app.component('Archives', Archives)
    app.component("Home", Home)
    setPosts(app, data)
  }
}
