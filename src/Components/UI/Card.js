import React from "react";
import classes from "./Card.module.scss";
export default function Card(props) {
  return (
    <div
      className={`${props.className} ${classes.card_container}`}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseDown}
    >
      {props.children}
    </div>
  );
}
