import React from "react";
import classes from './CardItem.module.css'

const CardItem = (props) => {
  console.log(props.id,'di');
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span>{props.price}</span>
          <span>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            props.onRemove(props.id);
          }}
        >
          -
        </button>
        {/* propstan kelgen id menen udalit kylat */}
        <button
          onClick={() => {
            props.onAdd(props.item);
          }}
        >
          +
        </button>
        {/* propstan kelgen itemge birdi koshup ishtetip atat */}
      </div>
    </li>
  );
};

export default CardItem;
