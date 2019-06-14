import { Query } from "react-apollo";
import gql from "graphql-tag";

const LOGGEDINUSER_QUERY = gql`
  query LOGGEDINUSER_QUERY {
    loggedInUser {
      id
      username
      routines {
        id
        name
        days {
          id
          date
          isCompleted
        }
      }
      isTrusted
    }
  }
`;

const LoggedInUser = props => {
  return (
    <Query query={LOGGEDINUSER_QUERY}>
      {payload => props.children(payload)}
    </Query>
  );
};

export { LOGGEDINUSER_QUERY };

export default LoggedInUser;
