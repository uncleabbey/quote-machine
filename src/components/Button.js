import React from "react";

const Button = props => {
  return (
    <div className="card-footer">
      <button
        id="new-quote"
        className="btn btn-primary"
        onClick={props.handleClick}
      >
        New Quote
      </button>
    </div>
  );
};

export default Button;
