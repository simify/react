import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://jackpotter-graphql.herokuapp.com/v1/graphql"
      //   headers: {
      //     Authorization: `Bearer ${authToken}`
      //   }
    }),
    cache: new InMemoryCache()
  });
};

export default createApolloClient;
