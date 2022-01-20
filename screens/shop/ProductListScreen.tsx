import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import ProductItem from '../../components/organisms/ProductItem';
import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/product.model';
import { setProducts } from '../../store/actions/products';
import { useTypedSelector } from '../../store/hooks';

// mocking call to endpoint
const fetchProducts = async () => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => resolve(PRODUCTS), 2000);
  });
};

const renderProductList = ({ ...item }: Product) => <ProductItem {...item} />;

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const allProducts = useTypedSelector(({ productsState }) => productsState.availableProducts);

  useEffect(() => {
    console.log('USE EFFECT!');
    const getAvailableProducts = async () => {
      try {
        const availableProducts = await fetchProducts();
        const payload = {
          availableProducts,
        };
        dispatch(setProducts(payload));
      } catch (error) {
        console.warn('Error while fetching available products: ', error);
      }
    };
    getAvailableProducts().catch((error) => console.warn(error));
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        data={allProducts}
        renderItem={({ item }) => renderProductList(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
});

export default ProductListScreen;
