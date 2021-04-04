import React from "react";
import PropTypes from "prop-types";
import "./productItem.scss";
import { Badge, Button } from "reactstrap";

ProductItem.propTypes = {
  product: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

ProductItem.defaultProps = {
  product: {},
  onEditClick: null,
  onRemoveClick: null,
};

function ProductItem(props) {
  const { product, onEditClick, onRemoveClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(product);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(product);
  };
  return (
    <div className="product">
      <img src={product.linkImage} alt={product.title} />
      <div className="product__overlay">
        <div className="product__location">
          <h4>
            <Badge color="primary">{product.locatedId}</Badge>
          </h4>
        </div>
        <h3 className="product__title">{product.title}</h3>
        <div className="product__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </div>
        </div>
        <div className="product__category">
          <h4>
            <Badge color="info">{product.categoryId}</Badge>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
