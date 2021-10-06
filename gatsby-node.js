const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query OfferPageQuery {
        allStrapiOffers {
          edges {
            node {
              slug
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
  result.data.allStrapiOffers.edges.forEach(({ node }) => {
    const path = node.slug;
    createPage({
      path,
      component: offerPageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
