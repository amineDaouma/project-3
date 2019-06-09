import React, { Component } from "react";
import CircleIconSVG from "./CircleIconSVG";
import PropTypes from "prop-types";
import Overlay from "../components/Overlay";
import DeleteRoutine from "../components/DeleteRoutine";
import UpdateRoutine from "../components/UpdateRoutine";
import { findTodayWithinArray } from "../lib/utils";

class SingleRoutine extends Component {
  getTodaysCompletion = () => {
    const { name, days } = this.props.routineData;
    const today = findTodayWithinArray(days);
    return today.isCompleted;
  };
  themeFill = {
    innerFillActive: "#0552b5",
    outerFillActive: "#0552b5",
    innerFillInactive: "white",
    outerFillInactive: "#9AA5B1"
  };
  state = {
    completed: this.getTodaysCompletion(),
    innerFill: this.getTodaysCompletion()
      ? this.themeFill.innerFillActive
      : this.themeFill.innerFillInactive,
    outerFill: this.getTodaysCompletion()
      ? this.themeFill.outerFillActive
      : this.themeFill.outerFillInactive,
    containerBackground: "red",
    isDetailOpen: false
  };
  handleClick = e => {
    e.persist();
    if (e.target.nodeName == "svg") return;
    const { isDetailOpen } = this.state;
    this.setState({
      isDetailOpen: !isDetailOpen
    });
  };

  render() {
    const { name, days } = this.props.routineData;
    const today = findTodayWithinArray(days);
    let { completed, innerFill, outerFill, isDetailOpen } = this.state;
    console.log(innerFill);
    console.log(outerFill);
    console.log(completed);
    return (
      <>
        {isDetailOpen && (
          <SingleRoutineDetail
            handleClick={this.handleClick}
            routineData={this.props.routineData}
          />
        )}
        <div className="container" onClick={this.handleClick}>
          <div
            className="svg-container"
            onMouseOver={() =>
              completed
                ? ""
                : this.setState({ innerFill: "hsla(214, 15%, 95%, 1)" })
            }
            onMouseLeave={() =>
              completed ? "" : this.setState({ innerFill: "white" })
            }
            onClick={() => {
              completed = !completed;
              if (completed) {
                innerFill = "#0552b5";
                outerFill = "#0552b5";
              } else {
                innerFill = "white";
                outerFill = "#9AA5B1";
              }
              this.setState({ completed, innerFill, outerFill });
            }}
          >
            <CircleIconSVG
              outerFill={outerFill}
              innerFill={innerFill}
              completed={completed}
            />
          </div>
          <span>{name}</span>
          <style jsx>{`
            .container {
              margin: 4px 128px;
              padding: 8px;
              height: 48px;
              background-color: white;
              border-radius: 8px;
              cursor: pointer;
            }
            .container:hover {
              background-color: hsla(214, 15%, 91%, 0.25);
            }
            span {
              margin-left: 16px;
              width: 100%;
            }
            .svg-container {
              border-radius: 50%;
              background: ${innerFill};
              border: 0.1px solid ${outerFill};
              cursor: pointer;
              position: relative;
              top: 4px;
              display: inline-block;
              width: 24px;
              height: 23px;
            }
          `}</style>
        </div>
      </>
    );
  }
}

SingleRoutine.propTypes = {
  routineData: PropTypes.object.isRequired
};

class SingleRoutineDetail extends Component {
  state = {
    name: this.props.routineData.name,
    isEdited: false
  };
  handleChange = e => {
    const name = e.target.value;
    const { isEdited } = this.state;
    this.setState({
      name
    });
    if (!isEdited) this.toggleEdited();
  };
  toggleEdited = () => {
    const { isEdited } = this.state;
    this.setState({
      isEdited: !isEdited
    });
  };
  render() {
    const { name, isEdited } = this.state;
    const { id } = this.props.routineData;
    return (
      <Overlay>
        <div className="SingleRoutineDetail">
          <input value={name} onChange={this.handleChange} />
          <button onClick={this.props.handleClick}>
            <strong>X</strong>
          </button>
          <div className="buttons">
            <UpdateRoutine
              isEdited={isEdited}
              routineId={id}
              name={name}
              toggleEdited={this.toggleEdited}
            />
            <DeleteRoutine routineId={id} />
          </div>
        </div>
        <style jsx>
          {`
          .buttons {
            padding: 8px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
            .SingleRoutineDetail {
              position:relative;
              height: 128px;
              width: 512px;
              padding: 16px;
              background: white;
              border: 1px solid white;
              border-radius: 5px;
              }

              input {
                padding: 4px;
                color: black;
                border: none;
                font-size: 20px;
                margin-top: 16px;
                border-radius: 4px;
              }

              input:hover {
                background-color: hsl(210, 16%, 82%, 0.1);
              }

              button {
                position: absolute;
                right: 0px;
                top: -12px;
                font-size: 20px;
                background-color: #E12D39;
                color: #3E4C59;
                content: none;
                border: 1px solid #E12D39;
                border-radius: 50%;
                margin-right: 8px;
                cursor: pointer;
              }
              button:hover {
                background-color: hsl(356, 75%, 65%);
                border: 1px solid  hsl(356, 75%, 65%);
              }
            }
          `}
        </style>
      </Overlay>
    );
  }
}

SingleRoutineDetail.propTypes = {
  routineData: PropTypes.object.isRequired
};

export default SingleRoutine;

export { SingleRoutineDetail };
