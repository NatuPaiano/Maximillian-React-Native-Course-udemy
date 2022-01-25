import React from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Product from '../../models/product.model';
import Card from '../molecules/Card.component';

interface IProductItemProps extends Product {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ProductItem = ({ id, navigation, title, price, imageUrl }: IProductItemProps) => {
  const handleViewDetails = () =>
    navigation.navigate('ProductDetail', { productId: id, productTitle: title });

  const handleAddToCart = () => {
    console.log('TO CART PRESSED!');
  };
  const actions = [
    {
      label: 'View Details',
      onPress: handleViewDetails,
    },
    {
      label: 'To Cart',
      onPress: handleAddToCart,
    },
  ];
  return <Card title={title} content={price} imageUrl={imageUrl} actions={actions} />;
};

export default ProductItem;
