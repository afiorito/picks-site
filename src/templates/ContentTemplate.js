import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';

import './content.scss';

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout className="container">
      <SEO title={frontmatter.title} />
      <div className="content">
        <h1>{frontmatter.title}</h1>
        <div
          className="content__body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        lastUpdated(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
