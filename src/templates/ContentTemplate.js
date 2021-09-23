import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import Seo from '../components/seo';

import './content.scss';

const ContentTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout className="container">
      <Seo title={frontmatter.title} />
      <div className={`content ${frontmatter.path.split('/')[1]}`}>
        <h1>{frontmatter.title}</h1>
        <div
          className="content__body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default ContentTemplate;

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
