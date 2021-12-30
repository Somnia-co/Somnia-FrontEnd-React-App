import React from "react";
import "./ShipRet.css";
import ContentTitle from "../../ContentTitle/ContentTitle";

export default function ShipRet(props) {
  return (
    <div className="ShipRet">
      <ContentTitle
        onChange={props.onChange}
        title="Terms And Conditions"
      ></ContentTitle>
      <div className="Shipping">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z" />
        </svg>
        <p>Click here to download Shipping and returns terms</p>
      </div>
    </div>
  );
}
