import React, { PropTypes } from 'react';

const ProductList = ({ title, items }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {items.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  </div>
);

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
};

export default ProductList;
