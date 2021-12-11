import { graphql } from 'gatsby';
import { Page } from 'components/common';

import './content.scss';

const ContentTemplate = ({ data }: any) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Page title={`Picks | ${frontmatter.title}`}>
      <main className="main container">
        <div className={`content ${frontmatter.path.split('/')[1]}`}>
          <h1>{frontmatter.title}</h1>
          <div className="content__body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>
    </Page>
  );
};

export default ContentTemplate;

export const pageQuery = graphql`
  query ($path: String!) {
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
