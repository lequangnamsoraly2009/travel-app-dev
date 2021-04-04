import React from "react";
import ProductsAddItems from "../../components/ProductsAddItems";
import "./addProductItems.scss";

AddProductItems.propTypes = {};

function AddProductItems(props) {
  return (
    <div className="product-edit">
      <h1 className="product-edit__title">Muốn thêm gì thì thêm</h1>
      <div className="product-edit__form">
        <ProductsAddItems
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default AddProductItems;
