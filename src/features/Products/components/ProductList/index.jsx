import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import ProductItem from "../ProductItem";

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductEditClick: PropTypes.func,
  onProductRemoveClick: PropTypes.func,
};

ProductList.defaultProps = {
  productList: [],
  onProductEditClick: null,
  onProductRemoveClick: null,
};

function ProductList(props) {
  const { productList, onProductEditClick, onProductRemoveClick } = props;
  return (
    <Row>
      {productList.map((product) => (
        <Col key={product.title} xs="12" md="6" lg="4">
          <ProductItem
            product={product}
            onEditClick={onProductEditClick}
            onRemoveClick={onProductRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
