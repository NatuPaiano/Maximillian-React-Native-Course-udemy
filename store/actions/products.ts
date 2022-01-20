import Product from '../../models/product.model';

export enum ProductsActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
}

interface ISetProducts {
  availableProducts: Product[];
}

export type ProductsActions = {
  type: ProductsActionTypes.SET_PRODUCTS;
  payload: ISetProducts;
};

export const setProducts = (availableProducts: ISetProducts): ProductsActions => {
  return {
    type: ProductsActionTypes.SET_PRODUCTS,
    payload: availableProducts,
  };
};
