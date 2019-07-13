import React, { useState } from "react";
import QuoteText from "./QuoteText";
import { quotes } from "./RandomQuotes";
import Tweet from "./TweetIcon";
import axios from "axios";

const url = "https://api.twitter.com/1.1/statuses/update";
const Quote = () => {
  const random = length => Math.floor(Math.random() * length);
  const [quote, setQuote] = useState({
    text: "Hello world is Jackshit",
    author: "Abby"
  });
  const [tweet] = useState({
    text: quote.text + "- " + quote.author
  });

  const handleClick = e => {
    setQuote(quotes[random(quotes.length)]);
  };
  const handleTweeting = e => {
    axios
      .post(url, tweet)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  return (
    <div id="quote-box" className="card">
      <Tweet tweetHandler={handleTweeting} />
      <QuoteText text={quote.text} author={quote.author} />
      <button id="new-quote" className="btn btn-primary" onClick={handleClick}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;
