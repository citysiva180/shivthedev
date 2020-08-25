import React, { Component } from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import "../stylesheets/loading.css";
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
      <div className="loader">
        <h1 style={{ border: "none", color: "purple" }}>
          Welcome to Shivthedev.tech
        </h1>
        <h3>You're On the Way...</h3>

        <p>{""}</p>

        <BeatLoader
          css={override}
          size={"20px"}
          color={"purple"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loading;
