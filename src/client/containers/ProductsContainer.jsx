import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const ProductsContainer = ({ products }) => (
  <div>Products</div>
);

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
  null,
)(ProductsContainer);
