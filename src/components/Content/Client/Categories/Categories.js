import React, { useState } from "react";
import "./Categories.css";
import { GetTranslation } from "../../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../../globalContext/context/LanguageContext";
import { UseActiveContentContext } from "../../../../globalContext/context/ActiveContentContext";
import ContentTitle from "../../ContentTitle/ContentTitle.js";
import { GetCategories } from "./GetCategories";

export default function Categories(props) {
  const globalLanguage = UseLanguageContext();
  const translation = GetTranslation("Categories", globalLanguage.value);
  const ActiveContent = UseActiveContentContext();

  return (
    <div className="Categories">
      <ContentTitle onChange={props.onChange} title={translation.title} />

      <div className="CategoryGrid">
        {GetCategories().map((category) => {
          return (
            <button
              className="Category"
              onClick={() => ActiveContent.HandleChange("PRODUCTS")}
              key={category.name}
            >
              {/* <img src={category.img} alt="category" type="image/webp" /> */}
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="DevNote">
        *this part is under development, all buttons redirect to the same page
        showing all products.
      </div>
    </div>
  );
}
