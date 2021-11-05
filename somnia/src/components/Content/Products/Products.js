import React from "react";
import "./Products.css";
import { GetTranslation } from "../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";
import { GetProducts } from "../../../public/Products/Products.js";
import SingleType from "./SingleTypeOfProduct/SingleTypeOfProduct.js";
import ContentTitle from "../ContentTitle/ContentTitle.js";

export default function Products(props) {
  const component = "Products";
  const globalLanguage = UseLanguageContext();
  const products = GetProducts();

  const translation = GetTranslation(component, globalLanguage.value);

  return (
    <div class="Collections">
      <ContentTitle onChange={props.onChange} title={translation.title}></ContentTitle>
      <div className="Products">
        {products.map((product) => {
          return (
            <SingleType
              type={product.title}
              products={product.products}
            ></SingleType>
          );
        })}
      </div>
    </div>
  );
}
