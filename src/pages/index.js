import * as React from "react";
import { Link, graphql } from "gatsby";

const IndexpPage = ({ data }) => {
  console.log(data);
  const { allMarkdownRemark } = data;
  return (
    <main>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby blog with Markdown pages.</p>
      <ul>
        {allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.frontmatter.slug}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default IndexpPage;

export const pageQuery = graphql`
  query SlugQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`;
