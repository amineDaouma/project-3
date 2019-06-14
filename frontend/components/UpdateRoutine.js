import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import PropTypes from "prop-types";
import { ScaleLoader } from "react-spinners";
import { buttonSpinnerStyle } from "../style/reactSpinner";

const UPDATE_ROUTINE_MUTATION = gql`
  mutation UPDATE_ROUTINE_MUTATION($routineId: String!, $name: String!) {
    updateRoutine(routineId: $routineId, name: $name) {
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
    let { isEdited, routineId, name, toggleEdited } = this.props;
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
      <Mutation
        mutation={UPDATE_ROUTINE_MUTATION}
        variables={{ routineId, name }}
        onCompleted={() => {
          toggleEdited();
        }}
      >
        {(updateMutation, { data, error, loading }) => {
          if (error) console.log(error);
          return (
            <>
              <button
                onClick={updateMutation}
                disabled={!this.props.isTrusted && !isEdited}
              >
                {loading ? (
                  <ScaleLoader
                    css={buttonSpinnerStyle}
                    heightUnit={"px"}
                    height={16}
                    widthUnit={"px"}
                    width={4}
                    radius={4}
                    color={"white"}
                    loading={true}
                    margin={"2px"}
                  />
                ) : (
                  "Update"
                )}
              </button>
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
          );
        }}
      </Mutation>
    );
  }
}

UpdateRoutine.propTypes = {
  isEdited: PropTypes.bool.isRequired
};

export default UpdateRoutine;
