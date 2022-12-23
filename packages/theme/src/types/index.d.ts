import type {DefaultTheme, Theme} from 'vitepress'

export const DecemberTheme: Theme

export interface Frontmatter {
  title: string
  date: string
  tags?: string[]
  categories?: string[]
  description?: string
}

export interface PostData {
  frontmatter: Frontmatter
  regularPath: string
}


export declare interface DecThemeConfig extends DefaultTheme.Config {
  // define your custom config here
  pageSize?: number
  posts: PostData[]
}

export * from './shim.d.ts'
