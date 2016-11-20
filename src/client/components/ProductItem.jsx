import React, { PropTypes } from 'react';

class ProductItem extends React.Component {
  getDisabled(item) {
    return this.isOutOfStock(item) ? 'disabled' : '';
  }

  getActionText(item) {
    return this.isOutOfStock(item) ? 'Sold Out' : 'Add to cart';
  }

  isOutOfStock(item) {
    return true;
  }

  render() {
    const { item, onAddToCart } = this.props;

    return (
      <div>
        <span>{item.name}</span>
        <button onClick={onAddToCart} disabled={this.getDisabled(item)}>
          {this.getActionText(item)}
        </button>
      </div>
    );
  }

}

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductItem;
