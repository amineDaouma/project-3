import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

const setTokenLocally = async token => {
  console.log(token);
  localStorage.setItem("Authorization", `Bearer ${token}`);
};

// modify this later to work with an internal state and input fields
const Signup = () => (
  //   const { username, password } = props;
  <Mutation
    mutation={SIGNUP_MUTATION}
    variables={{
      username: "yoyo",
      password: "yoyo"
    }}
    onCompleted={data => setTokenLocally(data.signup.token)}
  >
    {(signupMutation, { data, error }) => {
      if (data) console.log(data);
      if (error) console.log(error);
      return (
        <button type="submit" onClick={signupMutation}>
          Submit
        </button>
      );
    }}
  </Mutation>
);

export default Signup;
