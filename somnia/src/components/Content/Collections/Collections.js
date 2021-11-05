import React from "react";
import "./Collections.css";
import { GetCollections } from "../../../public/CollectionsList";
import CollectionButton from "./collection/CollectionButton.js";
import { GetTranslation } from "../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../globalContext/context/LanguageContext";
import ContentTitle from "../ContentTitle/ContentTitle";

export default function Collections(props) {
  const component = "Collections";
  const globalLanguage = UseLanguageContext();

  let collections = GetCollections();
  let translation = GetTranslation(component, globalLanguage.value);

  return (
    <div class="Collections">
      <ContentTitle
        onChange={props.onChange}
        title={translation.title}
      ></ContentTitle>
      <div className='Collections'>
        {collections.map((collection) => {
          return <CollectionButton>{collection}</CollectionButton>;
        })}
      </div>
    </div>
  );
}
