import {PostData} from "./shared/";


export const formateDateString = (date: string): string => {
  const dateJson = new Date(date).toJSON();

  const dateStr = new Date(+new Date(dateJson) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "");

  return dateStr.split(" ")[0];
};

export const resolveDate = (date: string, type: "year" | "month" | "day") => {
  const dateStr = formateDateString(date).replace(/-/g, "/");
  const dateObj = new Date(dateStr);

  const info = {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate()
  };

  return info[type].toString();
};


export function getPostsByYear(posts: PostData[]) {
  const formatPages = {};
  const formatPagesArr = [];
  for (const post of posts) {
    if (post.frontmatter.date) {
      const pageDateYear = resolveDate(post.frontmatter.date, "year");
      // @ts-ignore
      if (formatPages[pageDateYear]) {
        // @ts-ignore
        formatPages[pageDateYear].push(post);
      } else {
        // @ts-ignore
        formatPages[pageDateYear] = [post];
      }
    }
    for (const key in formatPages) {
      formatPagesArr.unshift({
        year: key,
        // @ts-ignore
        data: formatPages[key]
      });
    }
    return formatPagesArr;
  }
}


export function initTags(post: PostData[]) {
  const data: any = {}
  for (let index = 0; index < post.length; index++) {
    const element = post[index]
    const tags = element.frontmatter.tags
    if (tags) {
      tags.forEach((item) => {
        if (data[item]) {
          data[item].push(element)
        } else {
          data[item] = []
          data[item].push(element)
        }
      })
    }
  }
  return data
}
