import React from "react";
import TweetIcon from "../assets/TweetIcon.png";

const Tweet = props => {
  return (
    <a
      href="http://twitter.com/intent/tweet"
      onClick={props.tweetHandler}
      id="tweet-quote"
    >
      <img src={TweetIcon} alt="Tweet This" />
    </a>
  );
};

export default Tweet;
