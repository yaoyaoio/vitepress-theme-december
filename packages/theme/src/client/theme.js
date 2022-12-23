import DefaultTheme from 'vitepress/theme';
import Layout from './components/Layout.vue';
import Archives from "./components/Archives.vue";
import Home from "./components/Home.vue";
import './styles/custom.css';
import { setPosts } from "./composables";
function setupPosts(ctx) {
    const posts = ctx.siteData.value.themeConfig.posts;
    setPosts(ctx.app, posts);
}
export const DecemberTheme = {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {
        DefaultTheme.enhanceApp({ app, router, siteData });
        setupPosts({ app, router, siteData });
        app.component('Archives', Archives);
        app.component("Home", Home);
    }
};
//# sourceMappingURL=theme.js.map