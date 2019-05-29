import withApollo from "next-with-apollo";
// the following import doesn't work as of apollo-boost v0.4.0
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
// temporary fix below
// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { createHttpLink } from "apollo-link-http";
import { BACKEND_URL } from "../config";

const link = new HttpLink({
  uri: BACKEND_URL
});

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache()
    })
);
