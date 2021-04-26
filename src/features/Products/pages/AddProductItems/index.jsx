import { addProduct,editProduct } from "features/Products/productSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import ProductsAddItems from "../../components/ProductsAddItems";
import "./addProductItems.scss";

AddProductItems.propTypes = {};

function AddProductItems(props) {
  
  const  dispatch = useDispatch();
  const history = useHistory();
  const {productId} = useParams();
  // console.log(productId);
  const isAddMode = !productId; // Sẽ là thêm nếu không có id -> ngược lại nếu có id thì là sửa

  const productEdit = useSelector(state => state.products.find(p => p.id === productId));

  const initialValues = isAddMode 
  ?
  {
    id: Math.random().toString(36),
    title: "",
    locatedId: "",
    linkImage: "",
    information: "",
    categoryId: "",
  }
  : productEdit;

  const handleSubmit = (values) =>{
    if(isAddMode){
      const action = addProduct(values);
      dispatch(action);
    }
    else{
      const action = editProduct(values);
      dispatch(action);
    }
    history.push('/products');
  }

  return (
    <div className="product-edit">
      <h1 className="product-edit__title">Muốn thêm gì thì thêm</h1>
      <div className="product-edit__form">
        <ProductsAddItems
          initialValues = {initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddProductItems;
