import React from "react";
import "./ProductManagement.css";
import "./CollectionsManagement/CollectionsManagement";
import CollectionsManagement from "./CollectionsManagement/CollectionsManagement";

function ProductManagement() {
  return (
    <section id="ProdMgmt">
      <h1>Product Management</h1>
      <p>
        This is the product management page. Here you can add, delete or modify
        your products appearing on the client site.
      </p>
      <CollectionsManagement />
    </section>
  );
}

export default ProductManagement;
