import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import { LOGGEDINUSER_QUERY } from "./LoggedInUser";
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
        onCompleted={data => {
          Router.push("/");
        }}
        update={(cache, { data: { signup } }) => {
          cache.writeQuery({
            query: LOGGEDINUSER_QUERY,
            data: {
              __typename: "Mutation",
              loggedInUser: {
                __typename: "User",
                username: signup.user.username
              }
            }
          });
          setTokenLocally(signup.token);
        }}
      >
        {(signupMutation, { data, error, loading }) => {
          {
            loading ? NProgress.start() : NProgress.done();
          }
          return (
            <div className="signup-container">
              {error && (
                <div className="errorAlert">
                  <p>{`${error.message.replace("GraphQL error: ", "")}`}</p>
                </div>
              )}
              <div className="signup-content" />
              <form
                method="post"
                onSubmit={e => {
                  e.preventDefault();
                  this.handleSubmit(e, signupMutation);
                }}
              >
                <fieldset disabled={loading}>
                  <label htmlFor="username">
                    <p>Username</p>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="your username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="password">
                    <p>Password</p>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="your password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </label>
                  <button type="submit">Submit{loading ? "ting" : ""}</button>
                </fieldset>
              </form>
              <style jsx>
                {`
                  fieldset {
                    border: none;
                  }

                  input:disabled {
                    background-color: #9aa5b1;
                  }

                  button:disabled {
                    background-color: hsla(214, 95%, 36%, 0.5);
                    cursor: default;
                  }
                  button:disabled:hover {
                    background-color: hsla(214, 95%, 36%, 0.5);
                  }
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
                    display: flex;
                    justify-content: center;
                    max-width: 512px;
                    margin: 32px auto;
                    padding: 64px 0px;
                    background: #ffffff;
                    box-shadow: 0px 7px 5px rgba(154, 165, 177, 0.5);
                    border-radius: 5px;
                  }
                  @media (max-width: 800px) {
                    .signup-container {
                      margin: 32px 8px;
                    }
                  }

                  h1 {
                    text-align: center;
                  }

                  .errorAlert {
                    height: 64px;
                    margin-top: -32px;
                    margin-bottom: 32px;
                    background-color: #ffe3e3;
                    border-left: 5px #610316 solid;
                    padding: 4px;
                  }
                  .errorAlert p {
                    margin: 0px;
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
