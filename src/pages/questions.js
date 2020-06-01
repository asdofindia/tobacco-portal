import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Questions = ({ data }) => (
  <Layout>
    <Head pageTitle={data.questionsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.questionsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Questions.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Questions;

export const query = graphql`
  query QuestionsQuery {
    questionsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
