import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";

const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://jackpotter-graphql.herokuapp.com/v1/graphql",
      options: {
        reconnect: true
      }
    }),
    cache: new InMemoryCache()
  });
};

export default createApolloClient;
