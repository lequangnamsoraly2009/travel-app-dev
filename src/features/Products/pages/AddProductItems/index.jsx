import { addProduct } from "features/Products/productSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ProductsAddItems from "../../components/ProductsAddItems";
import "./addProductItems.scss";

AddProductItems.propTypes = {};

function AddProductItems(props) {

  const  dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) =>{
    const action = addProduct(values);
    dispatch(action);
    history.push('/products');
  }

  return (
    <div className="product-edit">
      <h1 className="product-edit__title">Muốn thêm gì thì thêm</h1>
      <div className="product-edit__form">
        <ProductsAddItems
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddProductItems;
