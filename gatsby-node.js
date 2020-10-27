/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// Create blog post list pages
const postsPerPage = 7;
const numPages = Math.ceil(posts.length / postsPerPage);
Array.from({ length: numPages }).forEach((_, i) => {
  createPage({
    path: i === 0 ? `/` : `/${i + 1}`,
    component: path.resolve("./src/templates/home.js"),
    context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
    },
  });
});