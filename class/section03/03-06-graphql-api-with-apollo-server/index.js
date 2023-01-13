import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// api docs
const typeDefs = `#graphql
  type Query {
    qqq: String
  }
`;

// query api
const resolvers = {
  Query: {
    qqq: () => {
      return "qqq";
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

startStandaloneServer(server);
