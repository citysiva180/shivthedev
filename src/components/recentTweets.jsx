import React, { Component, Suspense } from "react";
import { Tweet } from "react-twitter-widgets";
import "../stylesheets/recentTweets.css";
import { randomTweetGenerator } from "../components/rough";
import LoadingTweet from "../components/loadingCompoenent";

class Tweets extends Component {
  state = {
    tweets: [
      { tweet: "1124514496477687810" },
      { tweet: "1128937546866544641" },
      { tweet: "1134044618541027329" },
      { tweet: "1140593481682833408" },
    ],
    isLoading: false,
  };

  // componentDidUpdate(previousProps, prevState, snapshot) {
  //   console.log(this.componentDidUpdate);
  // }
  reloadTweets = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    let x = randomTweetGenerator();
    let check = [...this.state.tweets];
    for (let i = 0; i < check.length; i++) {
      check[i].tweet = x[i];
    }
    this.setState({ check });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  };

  render() {
    const renderTweet = (item, key) => {
      return (
        <div className="tweets" key={key}>
          {<Tweet tweetId={item.tweet} />}
        </div>
      );
    };

    if (this.state.isLoading) return <LoadingTweet></LoadingTweet>;
    return (
      <div className="Twitter">
        <div className="container">
          <h1>Tweets</h1>
          <button className="btn btn-large purple" onClick={this.reloadTweets}>
            Click here to randomly load some selected tweets
          </button>
          <p>{""}</p>
          <p>
            This component, randomly reloads selected tweets. For this you would
            need to get the twitter IDs and push them to a random function.{" "}
            There is a lot of mechanism involved here. Preventing default load
            and finally changing the state from normalcy
          </p>
          <div className="loadingscreen">
            {this.state.tweets.map(renderTweet)}
          </div>
        </div>
      </div>
    );
  }
}

export default Tweets;
