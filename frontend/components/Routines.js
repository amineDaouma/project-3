import { Query, ApolloConsumer } from "react-apollo";
import { gql } from "apollo-boost";
import CreateRoutine from "./CreateRoutine";
import { LOGGEDINUSER_QUERY } from "./LoggedInUser";

// const LOGGEDINUSER_CLIENT_QUERY = gql`
//   {
//     loggedInUser @client {
//       username
//     }
//   }
// `;

const Routines = () => (
  <ApolloConsumer>
    {client => {
      console.log(client);
      //   const data = client.readQuery({
      //     query: LOGGEDINUSER_QUERY
      //   });
      //   console.log(data);
      return (
        <div>
          <CreateRoutine />
        </div>
      );
    }}
  </ApolloConsumer>
  //   <div>
  //     {/* <Query query={LOGGEDINUSER_CLIENT_QUERY}>
  //       {payload => <CreateRoutine />}
  //     </Query> */}
  //   </div>
);

export default Routines;
