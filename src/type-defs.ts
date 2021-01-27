import { gql } from 'apollo-server';

export default gql`

type Joke { 
  categories: [String]
  icon_url: String!
  id: String!
  value: String!
  url: String!
  updated_at: String!
}

  type Query {

    """
    Test Message. 
    """
    testMessage: String!
    categories: [ String ]
    joke(category: String!): Joke

    }
`;
