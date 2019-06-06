import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const CREATE_ROUTINE_MUTATION = gql`
  mutation CREATE_ROUTINE_MUTATION($name: String!) {
    createRoutine(name: $name) {
      id
      name
    }
  }
`;

class CreateRoutine extends Component {
  state = {
    name: ""
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
      name: ""
    });
  };
  render() {
    const { name } = this.state;
    return (
      <Mutation
        mutation={CREATE_ROUTINE_MUTATION}
        variables={{
          name
        }}
      >
        {(createRoutine, payload) => (
          <>
            <input
              name="name"
              type="text"
              onChange={this.handleChange}
              onSubmit={e => this.handleSubmit(e, createRoutine)}
            />
            <button onClick={createRoutine}>Create</button>
            <style jsx>{``}</style>
          </>
        )}
      </Mutation>
    );
  }
}

export default CreateRoutine;
