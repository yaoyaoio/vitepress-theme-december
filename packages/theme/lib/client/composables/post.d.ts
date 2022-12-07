import { InjectionKey } from "vue";
import type { PostData } from "../types";
import type { App } from "@vue/runtime-core";
export declare const postsSymbol: InjectionKey<PostData[]>;
export declare function usePosts(): PostData[] | undefined;
export declare function setPosts(app: App, posts: PostData[]): App<any>;
