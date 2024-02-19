import React from "react";
import "../../Pages/Home.css";

function Carts({ title, number, description }) {
  return (
    <>
      <span className="title">{title}</span>
      <span className="value">{number}</span>
      <span className="des">{description}</span>
    </>
  );
}

export default Carts;
