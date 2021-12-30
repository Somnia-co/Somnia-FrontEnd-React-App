import React, { useState, useEffect } from "react";
import "./SingeTypeStyle.css";

export default function SingleTypeComponent(props) {
  //make sure the products doesn't get out of array
  function ChangeItem(setValue) {
    if (setValue < 0) ChangeCurrentItem(props.products.length - 1);
    else if (setValue >= props.products.length) ChangeCurrentItem(0);
    else ChangeCurrentItem(setValue);
  }
  //state of our component
  const [CurrentItemNumber, ChangeCurrentItem] = useState(0);

  //we have here current product
  let OneTypeProducts = props.products;
  let currentItem = OneTypeProducts[CurrentItemNumber];

  return (
    <div className="SingleType">
      <h2>{props.type}</h2>

      <picture>
        <source srcset={currentItem.webp} type="image/webp" />
        <img src={currentItem.img} alt={currentItem.name} />
      </picture>

      <div className="RowFlex">
        <svg
          onClick={() => ChangeItem(CurrentItemNumber - 1)}
          className="Arrow Back"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
        <h3>{currentItem.name}</h3>
        <svg
          onClick={() => ChangeItem(CurrentItemNumber + 1)}
          className="Arrow Next"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </div>
    </div>
  );
}
