import { RECEIVE_PRODUCTS } from '../constants/ActionTypes';

const initialState = [
  {
    id: 1,
    name: 'React',
  },
  {
    id: 2,
    name: 'Redux',
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default products;
