import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import PropTypes from "prop-types";

class UpdateRoutine extends Component {
  render() {
    const { isEdited } = this.props;
    let backgroundColor,
      hoverBackgroundColor,
      color = "";
    // let color = "";
    if (!isEdited) {
      backgroundColor = "#f5f7fa";
      color = "#9aa5b1";
    } else {
      backgroundColor = "#0552b5";
      color = "white";
      hoverBackgroundColor = "#2186eb";
    }
    return (
      <>
        <button>Update</button>
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
  }
}

UpdateRoutine.PropTypes = {
  isEdited: PropTypes.bool.isRequired
};

export default UpdateRoutine;
