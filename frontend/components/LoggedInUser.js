import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const LOGGEDINUSER_QUERY = gql`
  query LOGGEDINUSER_QUERY {
    loggedInUser {
      id
      username
    }
  }
`;

const LoggedInUser = () => (
  <Query query={LOGGEDINUSER_QUERY}>
    {({ data, error, loading }) => {
      //   console.log(data);
      return <p>LoggedInUser</p>;
    }}
  </Query>
);

export default LoggedInUser;
