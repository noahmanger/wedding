import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import monogram from "../images/monogram.png";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <div className="content">
        <Link to="/">
          <img class="logo" src={monogram} alt="J & N" />
        </Link>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
