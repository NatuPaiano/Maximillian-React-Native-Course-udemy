import Product from '../../models/product.model';
import { ProductsActions, ProductsActionTypes } from '../actions/products';

interface IProductsState {
  availableProducts: Product[];
  userProducts: Product[];
}

const initialState: IProductsState = {
  availableProducts: [],
  userProducts: [],
};

/* eslint-disable @typescript-eslint/default-param-last */
const productsReducer = (state = initialState, action: ProductsActions): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCTS: {
      return {
        ...state,
        availableProducts: action.payload.availableProducts,
      };
      break;
    }
    default:
      return state;
  }
};

export default productsReducer;
