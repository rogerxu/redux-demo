import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const ProductsContainer = ({ products }) => (
  <ProductList title="Products" items={products} />
);

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsContainer);
