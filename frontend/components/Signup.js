import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import withHeader from "./withHeader";

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
  localStorage.setItem("Authorization", `Bearer ${token}`);
};

// modify this later to work with an internal state and input fields
class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e, signupMutation) => {
    e.preventDefault();
    await signupMutation();
    this.setState({
      username: "",
      password: ""
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{
          username,
          password
        }}
        onCompleted={data => setTokenLocally(data.signup.token)}
      >
        {(signupMutation, { data, error }) => {
          // if (data) console.log(data);
          return (
            <div className="signup-container">
              <div className="signup-content" />
              <form
                method="post"
                onSubmit={e => {
                  e.preventDefault();
                  this.handleSubmit(e, signupMutation);
                }}
              >
                <label htmlFor="username">
                  <p>Username</p>
                  <input
                    type="text"
                    name="username"
                    placeholder="your username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  {error && (
                    <p>{`${error.message.replace("GraphQL error: ", "")}`}</p>
                  )}
                </label>
                <label htmlFor="password">
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    placeholder="your password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </form>

              {/* <button type="submit" onClick={signupMutation}> */}

              {data && <p>Successful signup</p>}
              <style jsx>
                {`
                  label {
                    font-size: 16px;
                  }

                  label p {
                    margin-bottom: 4px;
                    margin-top: 0px;
                  }
                  input {
                    display: block;
                    width: 100%;
                    border-radius: 5px;
                    font-size: 16px;
                    margin-bottom: 24px;
                    padding: 8px;
                    background-color: #e4e7eb;
                    color: #7b8794;
                  }
                  button {
                    display: block;
                    width: 128px;
                    margin: auto;
                    background: #0552b5;
                    border-radius: 5px;
                    font-size: 20px;
                    color: #f5f7fa;
                    padding: 8px;
                    border: none;
                    cursor: pointer;
                    box-shadow: 0px 3px 5px rgba(154, 165, 177, 0.8);
                  }
                  button:hover {
                    background: #2186eb;
                  }
                  .signup-container {
                    width: 512px;
                    margin: 32px auto;
                    padding: 64px 96px;
                    background: #ffffff;
                    box-shadow: 0px 7px 5px rgba(154, 165, 177, 0.5);
                    border-radius: 5px;
                  }

                  h1 {
                    text-align: center;
                  }
                `}
              </style>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

// export default Signup;
export default withHeader(Signup, "Sign Up");
