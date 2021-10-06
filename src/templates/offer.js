import { graphql } from "gatsby";
import * as React from "react";
const OfferTemplate = ({ data }) => {
  return (
    <main>
      <h1>{data.strapiOffers.Name}</h1>
      <p>This is just for a test</p>
      <strong>
        This page was published {data.strapiOffers.created_at} and has a slug of{" "}
        {data.strapiOffers.slug}
      </strong>
    </main>
  );
};

export default OfferTemplate;

export const query = graphql`
  query MyQuery($slug: String!) {
    strapiOffers(slug: { eq: $slug }) {
      Name
      created_at(fromNow: true)
      slug
    }
  }
`;
