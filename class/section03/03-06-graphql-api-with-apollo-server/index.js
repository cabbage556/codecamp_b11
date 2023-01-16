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
  // cors: true,  // 모든 사이트 허용하고 싶을 때
  // cors: { origin: ["https://naver.com", "https://daum.net"] } // 특정 사이트만 지정하고 싶을 때
});

startStandaloneServer(server);
