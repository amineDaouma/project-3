import withApollo from "next-with-apollo";
// the following import doesn't work as of apollo-boost v0.4.0
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { BACKEND_URL } from "../config";

const httpLink = new HttpLink({
  uri: BACKEND_URL,
  credentials: "include"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("Authorization");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ""
    }
  };
});

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      credentials: "include", // (refer https://github.com/apollographql/apollo-client/issues/4190)
      request: async operation => {
        operation.setContext({
          fetchOptions: {
            credentials: "include"
          },
          headers: {
            cookies: headers && headers.cookie
          }
        });
      }
    })
);
