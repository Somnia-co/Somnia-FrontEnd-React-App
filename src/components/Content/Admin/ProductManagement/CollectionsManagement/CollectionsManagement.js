import React from "react";

function CollectionsManagement(props) {
  function GetCollectionsFake() {
    return ["Season I", "season II"];
  }

  let collections = GetCollectionsFake();

  return (
    <form>
      <h2>Collections</h2>
      <select>
        {collections.map((collection) => {
          return <option>{collection}</option>;
        })}
      </select>
    </form>
  );
}

export default CollectionsManagement;
