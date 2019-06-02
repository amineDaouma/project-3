import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const LOGGEDINUSER_QUERY = gql`
  query LOGGEDINUSER_QUERY {
    loggedInUser {
      username
    }
  }
`;

const LoggedInUser = props => (
  <Query query={LOGGEDINUSER_QUERY}>{payload => props.children(payload)}</Query>
);

// const LoggedInUser = () => (
//   <Query query={LOGGEDINUSER_QUERY}>
//     {({ data, error, loading }) => {
//       if (data) console.log(data);
//       if (data && data.loggedInUser) {
//         const { username } = data.loggedInUser;
//         return <p>{username}</p>;
//       }
//       // if (error) return <p>{error.message}</p>;
//       return <p>Guest</p>;
//     }}
//   </Query>
// );

export { LOGGEDINUSER_QUERY };

export default LoggedInUser;
