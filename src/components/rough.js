export function randomTweetGenerator() {
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

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let value1 = Number(randomIntFromInterval(0, 2));
  let value2 = Number(randomIntFromInterval(3, 5));
  let value3 = Number(randomIntFromInterval(6, 8));
  let value4 = Number(randomIntFromInterval(9, 11));

  let randomTweets = [];
  randomTweets.push(tweetIds[value1]);
  randomTweets.push(tweetIds[value2]);
  randomTweets.push(tweetIds[value3]);
  randomTweets.push(tweetIds[value4]);
  return randomTweets;
}
