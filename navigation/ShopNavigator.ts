import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import COLORS from '../constants/theme';
import ProductListScreen from '../screens/shop/ProductListScreen';

const ProductsNavigator = createStackNavigator(
  {
    AllProducts: {
      screen: ProductListScreen,
      navigationOptions: { headerTitle: 'All Products' },
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
