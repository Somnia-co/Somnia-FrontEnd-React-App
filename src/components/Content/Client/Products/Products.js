import React, { useState } from "react";
import "./Products.css";
import { GetTranslation } from "../../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../../globalContext/context/LanguageContext";
import { GetProducts } from "../../../../public/Products/GetProducts.js";
import SingleType from "./SingleTypeOfProduct/SingleTypeOfProduct.js";
import ContentTitle from "../../ContentTitle/ContentTitle.js";

export default function Products(props) {
  const [CurrentlyShownProducts, SetCurrentlyShwownProducts] = useState();
  const component = "Products";
  const globalLanguage = UseLanguageContext();
  const products = GetProducts();

  const translation = GetTranslation(component, globalLanguage.value);

  return (
    <div className="Collections">
      <ContentTitle onChange={props.onChange} title={translation.title} />
      <div className="Filters">
        <h3>Sort by:</h3>
        <h3>A-Z: </h3>
        <h3>Collection: </h3>
      </div>
      <div className="Products">
        {products.map((product) => {
          return (
            <SingleType
              type={product.type}
              products={product.products}
            ></SingleType>
          );
        })}
      </div>
    </div>
  );
}
