import * as React from "react";
import { Link, graphql } from "gatsby";

const IndexpPage = ({ data }) => {
  console.log(data);
  return (
    <main>
      <p>Hello, Welocme</p>
      <ul>
        {data.allStrapiOffers.edges.map((document) => (
          <li>
            <Link to={`${document.node.slug}`}>{document.node.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default IndexpPage;

export const pageQuery = graphql`
  query MyQuery2 {
    allStrapiOffers {
      edges {
        node {
          id
          slug
          Name
        }
      }
    }
  }
`;
