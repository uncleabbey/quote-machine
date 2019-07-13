import React from "react";

const QuoteText = ({ text, author }) => {
  return (
    <div className="card-body">
      <blockquote className="blockquote-reverse">
        <p id="text" className="card-text">
          {text}{" "}
        </p>
        <footer id="author" className="card-text">
          - {author}
        </footer>
      </blockquote>
    </div>
  );
};

export default QuoteText;
