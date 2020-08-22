import React from "react";
import { Tweet } from "react-twitter-widgets";
import "../stylesheets/recentTweets.css";

const Tweets = () => {
  const tweetIds = [
    1281819161040023553,
    1289205851404660736,
    1108565412747186176,
    1118032374246322176,
    1118193735786008578,
    1119148595117035520,
    1124514496477687810,
    1128937546866544641,
    1134044618541027329,
    1140593481682833408,
    1183456431279788033,
    1266806025488748544,
  ];

  let someTweet = tweetIds[Math.floor(Math.random() * tweetIds.length)];

  return (
    <div className="container">
      <h1>Tweets</h1>
      <Tweet tweetId={someTweet} />;
    </div>
  );
};

export default Tweets;
