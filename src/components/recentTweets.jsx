import React, { Component } from "react";
import { Tweet } from "react-twitter-widgets";
import "../stylesheets/recentTweets.css";
import {
  someTweet5,
  someTweet6,
  someTweet7,
  someTweet8,
} from "../components/rough";

class Tweets extends Component {
  state = {
    someTweet1: "",
    someTweet2: "",
    someTweet3: "",
    someTweet4: "",
  };

  // refreshPage = () => {
  //   this.setState(
  //     { someTweet1: someTweet5 },
  //     { someTweet2: someTweet6 },
  //     { someTweet3: someTweet7 },
  //     { someTweet4: someTweet8 }
  //   );
  // };
  render() {
    // let someTweet1 = "";
    // let someTweet2 = "";
    // let someTweet3 = "";
    // let someTweet4 = "";
    return (
      <div className="Twitter">
        <div className="container">
          <h1>Tweets</h1>

          <p>
            This component, randomly reloads selected tweets. For this you would
            need to get the twitter IDs and push them to a random function.{" "}
          </p>
          <div className="twee">
            <div className="tweets">
              <Tweet tweetId={someTweet5} options={{ width: "200" }} />
            </div>
            <div className="tweets">
              <Tweet tweetId={someTweet6} options={{ width: "200" }} />
            </div>
            <div className="tweets">
              <Tweet tweetId={someTweet7} options={{ width: "200" }} />
            </div>
            <div className="tweets">
              <Tweet tweetId={someTweet8} options={{ width: "200" }} />
            </div>
          </div>
          {/* <button className="btn btn-large purple" onClick={this.refreshPage}>
            Click here to randomly load some selected tweets
          </button> */}
        </div>
      </div>
    );
  }
}

export default Tweets;
