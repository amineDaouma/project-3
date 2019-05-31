// import React, { Component } from "react";

const withHeader = (Component, headerName) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <h1>{headerName}</h1>
          <Component />
          <style jsx>
            {`
              h1 {
                font-size: 24px;
                text-align: center;
                margin: 0px;
                margin-top: 32px;
              }
            `}
          </style>
        </>
      );
    }
  };
};

export default withHeader;
