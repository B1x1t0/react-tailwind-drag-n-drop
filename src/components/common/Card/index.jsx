import React from "react";

function Card({ title, text }) {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <label className="card-title">{title}</label>
      {text}
    </div>
  );
}

export default Card;
