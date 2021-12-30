import React from "react";
import "./Collections.css";
import { GetCollections } from "../../../../public/GetCollections";
import CollectionButton from "./collection/CollectionButton.js";
import { GetTranslation } from "../../../../public/Dictionary.js";
import { UseLanguageContext } from "../../../../globalContext/context/LanguageContext";
import { UseActiveContentContext } from "../../../../globalContext/context/ActiveContentContext";
import ContentTitle from "../../ContentTitle/ContentTitle";

export default function Collections(props) {
  const component = "Collections";
  const globalLanguage = UseLanguageContext();
  const ActiveContent = UseActiveContentContext();

  let collections = GetCollections();
  let translation = GetTranslation(component, globalLanguage.value);

  return (
    <div className="Collections">
      <ContentTitle
        onChange={props.onChange}
        title={translation.title}
      ></ContentTitle>
      <div className="Collections">
        {collections.map((collection) => {
          return (
            <CollectionButton
              onClick={() =>
                ActiveContent.HandleChange("SingleCollection", collection.name)
              }
              key={collection.name}
              text={collection}
            />
          );
        })}
      </div>
    </div>
  );
}
