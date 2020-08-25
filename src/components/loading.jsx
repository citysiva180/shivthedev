import React, { Component } from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

class Loading extends Component {
  state = { loading: true };
  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: purple;
      align-content: center;
    `;
    return (
      <div className="container">
        <span style={{ alignContent: "center", color: "purple" }}>
          <h1>You're On the Way...</h1>
        </span>

        <p>{""}</p>

        <div
          className="SqaureLoader"
          style={{ alignContent: "center", color: "purple" }}
        >
          <BeatLoader
            css={override}
            size={"20px"}
            color={"purple"}
            alignContent={"center"}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default Loading;
