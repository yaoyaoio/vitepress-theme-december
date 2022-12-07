import fg from 'fast-glob';
import MarkdownIt from 'markdown-it';
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter';
import fs from "fs-extra";
import { formateDateString } from "./resolvePage";
async function createMarkdownRender() {
    return MarkdownIt({ html: true }).use(frontmatterPlugin, {
        // options
        grayMatterOptions: {
            excerpt: true,
            excerpt_separator: '<!-- more -->',
        },
    });
}
async function getPages(cmd) {
    return (await fg(['**.md'], {
        cwd: cmd,
        ignore: ["**/node_modules", "README.md", "docs/pages", "docs/index.md", ...([])]
    })).sort();
}
export async function getPosts(root) {
    let pages = await getPages(root);
    const render = await createMarkdownRender();
    let posts = await Promise.all(pages.map(async (page) => {
        return await renderPage(render, page, root);
    }));
    posts.sort(compareDate);
    return posts;
}
async function renderPage(render, page, root) {
    const content = await fs.readFile(root + '/' + page, "utf-8");
    const env = {};
    render.render(content, env);
    // TODO:// 类型转换
    // @ts-ignore
    const ft = {
        ...env.frontmatter,
        // @ts-ignore
        date: formateDateString(env.frontmatter.date)
    };
    const pagePath = page.replace("docs", "").replace(".md", ".html");
    return {
        frontmatter: ft,
        regularPath: `/${pagePath}`,
    };
}
const compareDate = (a, b) => {
    return a.frontmatter.date < b.frontmatter.date ? 1 : -1;
};
export const renderPosts = () => {
    console.log("renderPosts");
};
