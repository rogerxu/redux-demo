import React, { PropTypes } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ title, items }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {items.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  </div>
);

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
};

export default ProductList;
