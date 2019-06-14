import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import AddIconSVG from "./AddIconSVG";

const CREATE_ROUTINE_MUTATION = gql`
  mutation CREATE_ROUTINE_MUTATION($name: String!) {
    createRoutine(name: $name) {
      id
      name
    }
  }
`;

//refer to this link (https://www.bountysource.com/issues/47245060-refetchqueries-after-mutation)
//on why we have duplicate definitions of LOGGEDINUSER_QUERY
//it seems that export messes things up
//another potential refactor is to pass in a string variable into gql
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

class CreateRoutine extends Component {
  state = {
    name: "",
    active: false,
    addIconColor: "#1CD4D4"
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //handleChange and handleSubmit implementation is similar for most CRUD process
  //consider refactoring both of them
  handleSubmit = async (e, mutation) => {
    e.preventDefault();
    await mutation();
    this.setState({
      name: "",
      active: false
    });
  };
  render() {
    const { name, active, addIconColor } = this.state;
    if (active) {
      return (
        <Mutation
          mutation={CREATE_ROUTINE_MUTATION}
          variables={{
            name
          }}
          refetchQueries={() => [{ query: LOGGEDINUSER_QUERY }]}
        >
          {(createRoutine, { data, error, loading }) => (
            <>
              {error && (
                <div className="errorAlert">
                  <p>{`${error.message.replace("GraphQL error: ", "")}`}</p>
                </div>
              )}
              <form
                method="post"
                onSubmit={e => {
                  this.handleSubmit(e, createRoutine);
                }}
              >
                <fieldset disabled={loading}>
                  <input
                    name="name"
                    type="text"
                    onChange={this.handleChange}
                    onSubmit={e => this.handleSubmit(e, createRoutine)}
                    placeholder="Commit a new habit..."
                    value={name}
                  />
                  <button>Commit{loading ? "ing" : ""}</button>
                </fieldset>
              </form>
              <hr />
              <style jsx>{`
                form {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 16px;
                }
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
                input {
                  display: block;
                  width: 512px;
                  border-radius: 5px;
                  font-size: 16px;
                  margin-bottom: 24px;
                  margin: 16px auto;
                  padding: 8px;
                  background-color: #e4e7eb;
                  color: #7b8794;
                }
                button {
                  display: block;
                  width: 128px;
                  margin: auto;
                  border-radius: 5px;
                  font-size: 16px;
                  color: #f5f7fa;
                  background: #0552b5;
                  padding: 8px;
                  border: none;
                  cursor: pointer;
                  box-shadow: 0px 3px 5px rgba(154, 165, 177, 0.8);
                }
                button:hover {
                  background: #2186eb;
                }
                hr {
                  border: 0;
                  height: 0;
                  width: 50%;
                  border-top: 1px solid rgba(0, 0, 0, 0.1);
                  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                }
              `}</style>
            </>
          )}
        </Mutation>
      );
    }
    return (
      <div>
        <div
          onClick={() => {
            this.setState({
              active: true
            });
          }}
          onMouseOver={() => {
            this.setState({
              addIconColor: "#1CD4D4"
            });
          }}
          onMouseLeave={() => {
            this.setState({
              addIconColor: "#62F4EB"
            });
          }}
          className="svg-container"
        >
          <AddIconSVG className="add" fill={"#47A3F3"} />
        </div>
        <p
          style={{
            textAlign: "center"
          }}
        >
          (placeholder percentage)%! Great work. You earn yourself a new habit.
          Or update an existing one.
        </p>
        <hr />
        <style jsx>{`
          .svg-container {
            border-radius: 25%;
            width: 48px;
            margin: 0px auto;
            cursor: pointer;
          }
          .svg-container:hover {
            background: hsla(214, 15%, 91%, 0.25);
          }
          hr {
            border: 0;
            height: 0;
            width: 50%;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          }
        `}</style>
      </div>
    );
  }
}

export default CreateRoutine;
