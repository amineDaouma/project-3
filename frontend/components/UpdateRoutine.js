import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import PropTypes from "prop-types";

const DELETE_ROUTINE_MUTATION = gql`
  mutation DELETE_ROUTINE_MUTATION($routineId: String!) {
    deleteRoutine(routineID: $routineId) {
      id
      name
      ownedBy {
        id
        username
      }
    }
  }
`;

class UpdateRoutine extends Component {
  render() {
    const { isEdited, routineId } = this.props;
    let backgroundColor,
      hoverBackgroundColor,
      color = "";
    if (!isEdited) {
      backgroundColor = "#f5f7fa";
      color = "#9aa5b1";
    } else {
      backgroundColor = "#0552b5";
      color = "white";
      hoverBackgroundColor = "#2186eb";
    }
    return (
      <Mutation mutation={DELETE_ROUTINE_MUTATION} variables={{ routineId }}>
        {(deleteMutation, { data, error, loading }) => (
          <>
            <button onClick={deleteMutation}>Update</button>
            <style jsx>{`
              button {
                border-radius: 4px;
                padding: 4px 8px;
                display: block;
                margin-left: 8px;
                font-size: 16px;
                border: none;
                color: ${color};
                background: ${backgroundColor};
                cursor: pointer;
              }
              button:hover {
                background-color: ${hoverBackgroundColor};
              }
            `}</style>
          </>
        )}
      </Mutation>
    );
  }
}

UpdateRoutine.propTypes = {
  isEdited: PropTypes.bool.isRequired
};

export default UpdateRoutine;
