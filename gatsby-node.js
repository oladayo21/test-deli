const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild("Error running query");
    return;
  }
  const offerPageTemplate = path.resolve("src/templates/offer.js");
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.frontmatter;
    console.log(slug);
    if (!slug.startsWith("/stest")) {
      createPage({
        path: node.frontmatter.slug,
        component: offerPageTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    }
  });
};
