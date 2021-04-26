import React from "react";
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import "./mainProducts.scss";
import {  useDispatch, useSelector } from "react-redux";
import ProductList from "features/Products/components/ProductList";
import { removeProduct } from "features/Products/productSlice";
// import { useHistory } from 'react-router';

MainProducts.propTypes = {};

function MainProducts(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const history = useHistory();
  console.log("List:",products);

  // const handlePhotoEditClick = (photo) => {
  //   console.log('Edit: ', photo);
  //   const editPhotoUrl = `/photos/${photo.id}`;
  //   history.push(editPhotoUrl);
  // }
  const handleProductEditClick = (product) => {
    console.log("Edit:",product);
    const editProductUrl = `/products/${product.id}`;
    history.push(editProductUrl); // redirect về URL cần edit
  }

  const handleProductRemoveClick = (product) => {
    console.log("Remove:",product);
    const removeProductId = product.id;
    const action = removeProduct(removeProductId);
    dispatch(action);
  }

  // const handlePhotoRemoveClick = (photo) => {
  //   console.log('Remove: ', photo);
  //   const removePhotoId = photo.id;
  //   const action = removePhoto(removePhotoId);
  //   dispatch(action);
  // }
  return (
    <div className="product-main">
      <Container >
          <Link className="product-main__add" to="/products/add">Add new products</Link> 
          <ProductList
          productList={products}
          onProductEditClick={handleProductEditClick}
          onProductRemoveClick={handleProductRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainProducts;
