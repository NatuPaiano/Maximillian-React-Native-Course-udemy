import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, NavigationStackScreenComponent } from 'react-navigation-stack';
import COLORS from '../constants/theme';
import CartScreen from '../screens/shop/CartScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import ProductListScreen from '../screens/shop/ProductListScreen';

const ProductsNavigator = createStackNavigator(
  {
    AllProducts: {
      screen: ProductListScreen,
      navigationOptions: { headerTitle: 'All Products' },
    },
    ProductDetail: ProductDetailScreen as NavigationStackScreenComponent,
    CartDetails: {
      screen: CartScreen,
      navigationOptions: { headerTitle: 'Your Cart' },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? COLORS.white : COLORS.primaryColor,
    },
  },
);

export default createAppContainer(ProductsNavigator);
