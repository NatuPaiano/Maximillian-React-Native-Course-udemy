import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';
import CustomHeaderButton from '../../components/atoms/CustomHeaderButton.component';
import ProductItem from '../../components/organisms/ProductItem.component';
import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/product.model';
import { setProducts } from '../../store/actions/products';
import { useTypedSelector } from '../../store/hooks';
import { availableProductsSelector } from '../../store/selectors/products';

// mocking call to endpoint
const fetchProducts = async () => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => resolve(PRODUCTS), 2000);
  });
};

const ProductListScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const dispatch = useDispatch();
  const allProducts = useTypedSelector(availableProductsSelector);

  const renderProductList = ({ ...item }: Product) => (
    <ProductItem navigation={navigation} {...item} />
  );

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

ProductListScreen.navigationOptions = ({ navigation }) => {
  const handleGoToCart = () => navigation.navigate('CartDetails');

  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="cart" iconName="cart" onPress={handleGoToCart} />
      </HeaderButtons>
    ),
  };
};

export default ProductListScreen;
