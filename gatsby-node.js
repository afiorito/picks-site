const path = require(`path`);

exports.createPages = ({ actions: { createPage }, graphql }) => {
  const markdown = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.fileAbsolutePath.match(/markdown\/(.*)\.md/)[1]}/`,
        component: path.resolve(`./src/components/templates/ContentTemplate.tsx`),
        context: {}, // additional data can be passed via context
      });
    });
  });

  return Promise.all([markdown]);
};
