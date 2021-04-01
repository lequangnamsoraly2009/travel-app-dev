import React from "react";
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./mainProducts.scss";

MainProducts.propTypes = {};

function MainProducts(props) {
  return (
    <div className="product-main">
      <Container >
          <Link className="product-main__add" to="/products/add">Add new products</Link> 
      </Container>
    </div>
  );
}

export default MainProducts;
