import React, { Component } from "react";
import CircleIconSVG from "./CircleIconSVG";

class SingleRoutine extends Component {
  state = {
    completed: false,
    innerFill: "white",
    outerFill: "#9AA5B1"
  };
  render() {
    const { name } = this.props.routineData;
    let { completed, innerFill, outerFill } = this.state;
    return (
      <div className="container">
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
              outerFill - "#0552b5";
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
            margin: 16px 128px;
            height: 30px;
          }
          span {
            margin-left: 16px;
            padding-bottom: 100px;
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
    );
  }
}

export default SingleRoutine;
