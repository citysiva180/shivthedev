import React from "react";
import { Tweet } from "react-twitter-widgets";
import "../stylesheets/recentTweets.css";

const Tweets = () => {
  const tweetIds = [
    "1281819161040023553",
    "1289205851404660736",
    "1108565412747186176",
    "1118032374246322176",
    "1118193735786008578",
    "1119148595117035520",
    "1124514496477687810",
    "1128937546866544641",
    "1134044618541027329",
    "1140593481682833408",
    "1183456431279788033",
    "1266806025488748544",
  ];

  let someTweet1 = tweetIds[Math.floor(Math.random() * tweetIds.length)];
  let someTweet2 = tweetIds[Math.floor(Math.random() * tweetIds.length)];
  let someTweet3 = tweetIds[Math.floor(Math.random() * tweetIds.length)];
  let someTweet4 = tweetIds[Math.floor(Math.random() * tweetIds.length)];
  // let someTweet5 = tweetIds[Math.floor(Math.random() * tweetIds.length)];
  // let someTweet6 = tweetIds[Math.floor(Math.random() * tweetIds.length)];

  return (
    <div className="container">
      <h1>Tweets</h1>
      <p>Reload to see different tweets</p>
      <div className="twee">
        <div className="tweets">
          <Tweet tweetId={someTweet1} options={{ width: "200" }} />
        </div>
        <div className="tweets">
          <Tweet tweetId={someTweet2} options={{ width: "200" }} />
        </div>
        <div className="tweets">
          <Tweet tweetId={someTweet3} options={{ width: "200" }} />
        </div>
        <div className="tweets">
          <Tweet tweetId={someTweet4} options={{ width: "200" }} />
        </div>
      </div>
    </div>
  );
};

export default Tweets;
