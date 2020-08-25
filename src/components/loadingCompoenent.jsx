import React, { Component } from "react";

import "../stylesheets/loading.css";
class LoadingTweet extends Component {
  state = { isloading: true };
  render() {
    return (
      <div className="loader">
        <div className="loader center">
          <i className="fa fa-cog fa-spin" />
        </div>
      </div>
    );
  }
}

export default LoadingTweet;
