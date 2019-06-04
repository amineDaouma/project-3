import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CreateRoutine from "./CreateRoutine";

const LOGGEDINUSER_CLIENT_QUERY = gql`
  {
    loggedInUser @client {
      username
    }
  }
`;

const Routines = () => (
  <div>
    <Query query={LOGGEDINUSER_CLIENT_QUERY}>
      {payload => <CreateRoutine />}
    </Query>
  </div>
);

export default Routines;
