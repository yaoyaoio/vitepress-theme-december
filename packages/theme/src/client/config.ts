import type {DefaultTheme} from 'vitepress/theme'
import type {PostData} from "./types";

export interface DecThemeConfig extends DefaultTheme.Config {
  // define your custom config here
  pageSize?: number
  posts: PostData[]
}
