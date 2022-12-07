export const formateDateString = (date) => {
    const dateJson = new Date(date).toJSON();
    const dateStr = new Date(+new Date(dateJson) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    return dateStr.split(" ")[0];
};
export const resolveDate = (date, type) => {
    const dateStr = formateDateString(date).replace(/-/g, "/");
    const dateObj = new Date(dateStr);
    const info = {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth() + 1,
        day: dateObj.getDate()
    };
    return info[type].toString();
};
export const getPostsByYear = (posts) => {
    const formatPages = {};
    const formatPagesArr = [];
    for (const post of posts) {
        if (post.frontmatter.date) {
            const pageDateYear = resolveDate(post.frontmatter.date, "year");
            // @ts-ignore
            if (formatPages[pageDateYear]) {
                // @ts-ignore
                formatPages[pageDateYear].push(post);
            }
            else {
                // @ts-ignore
                formatPages[pageDateYear] = [post];
            }
        }
        for (const key in formatPages) {
            formatPagesArr.unshift({
                // @ts-ignore
                year: key,
                // @ts-ignore
                data: formatPages[key]
            });
        }
    }
    return formatPagesArr;
};
