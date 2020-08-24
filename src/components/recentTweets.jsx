import React, { Component } from "react";
import { Tweet } from "react-twitter-widgets";
import "../stylesheets/recentTweets.css";
// import {
//   someTweet5,
//   someTweet6,
//   someTweet7,
//   someTweet8,
// } from "../components/rough";

class Tweets extends Component {
  state = {
    tweets: [
      "1124514496477687810",
      "1128937546866544641",
      "1134044618541027329",
      "1140593481682833408",
      "1183456431279788033",
      "1266806025488748544",
    ],
  };

  refreshPage = () => {
    this.setState((state) => {});
  };
  render() {
    return (
      <div className="Twitter">
        <div className="container">
          <h1>Tweets</h1>

          <p>
            This component, randomly reloads selected tweets. For this you would
            need to get the twitter IDs and push them to a random function.{" "}
          </p>
          {this.state.tweets.map((item) => (
            <ul id="menu">
              <li key={item}>
                {<Tweet tweetId={item} options={{ width: 200 }} />}
              </li>
            </ul>
          ))}
          <button className="btn btn-large purple" onClick={this.refreshPage}>
            Click here to randomly load some selected tweets
          </button>
        </div>
      </div>
    );
  }
}

export default Tweets;
