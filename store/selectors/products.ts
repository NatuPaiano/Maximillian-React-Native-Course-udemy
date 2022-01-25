import { Rootstate } from '..';

export const availableProductsSelector = ({ productsState }: Rootstate) =>
  productsState.availableProducts;

export const productByIdSelector = ({ productsState }: Rootstate, id: string) =>
  productsState.availableProducts.find((product) => product.id === id);

export default {};
