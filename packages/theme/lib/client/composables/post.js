import { inject } from "vue";
export const postsSymbol = Symbol('postsSymbol');
export function usePosts() {
    const posts = inject(postsSymbol);
    if (!posts) {
        console.log('posts not found');
        return undefined;
    }
    return posts;
}
export function setPosts(app, posts) {
    return app.provide(postsSymbol, posts);
}
