import React, { useState } from "react";
import QuoteText from "./QuoteText";
import { quotes } from "./RandomQuotes";
import Header from "./Header";
import Button from "./Button";

const Quote = () => {
  const random = length => Math.floor(Math.random() * length);
  const [quote, setQuote] = useState({
    text: "You Can Never Cheat An Honest Man",
    author: "Abby"
  });

  const handleClick = e => {
    setQuote(quotes[random(quotes.length)]);
  };

  return (
    <div id="quote-box" className="card bg-success text-white">
      <Header />
      <QuoteText text={quote.text} author={quote.author} />
      <Button handleClick={handleClick} />
    </div>
  );
};

export default Quote;
