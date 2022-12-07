import {defineConfigWithTheme} from "vitepress";
import type {DecThemeConfig} from "vitepress-theme-december";
import {getPosts} from "./theme/utils";

async function config() {
  return defineConfigWithTheme<DecThemeConfig>({
    title: "vitepress's Blog",
    description: 'Just playing around.',
    themeConfig: {
      nav: [
        {text: 'Home', link: '/'},
        {text: 'Archives', link: '/pages/archives'},
        {text: 'About', link: '/pages/about'},
      ],
      socialLinks: [
        {icon: 'github', link: 'https://github.com/yaoyaoio/vitepress-theme-december'},
      ],
      posts: await getPosts("./"),
      pageSize: 10,
    }
  })
}

export default config()
