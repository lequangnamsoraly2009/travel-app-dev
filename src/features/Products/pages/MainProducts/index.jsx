import React from "react";
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./mainProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "features/Products/components/ProductList";
import { useHistory } from 'react-router';

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
          // onPhotoEditClick={handlePhotoEditClick}
          // onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainProducts;
