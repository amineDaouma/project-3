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
            this.setState({ innerFill: "hsla(214, 15%, 95%, 1)" })
          }
          onMouseLeave={() => this.setState({ innerFill: "white" })}
          onClick={() => {
            completed = !completed;
            this.setState({ completed });
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
            margin: 16px 24px;
            height: 30px;
          }
          span {
            margin-left: 16px;
            padding-bottom: 100px;
          }
          .svg-container {
            cursor: pointer;
            position: relative;
            top: 4px;
            padding: 0;
            display: inline-block;
            width: 24px;
            height: 20px;
          }
        `}</style>
      </div>
    );
  }
}

export default SingleRoutine;
