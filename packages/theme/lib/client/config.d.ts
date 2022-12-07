import type { DefaultTheme } from 'vitepress/theme';
import type { PostData } from "./types";
export interface DecThemeConfig extends DefaultTheme.Config {
    pageSize?: number;
    posts: PostData[];
}
