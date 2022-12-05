import {defineConfigWithTheme} from "vitepress";
import {DecThemeConfig} from "../../packages/theme/config";

export default defineConfigWithTheme<DecThemeConfig>({
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
    pageSize: 10,
  }
})
