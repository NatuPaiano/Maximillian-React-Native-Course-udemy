import React from 'react';
import Product from '../../models/product.model';
import Card from '../molecules/Card.component';

const ProductItem = ({ title, price, imageUrl }: Product) => {
  const handleViewDetails = () => {
    console.log('VIEW DETAILS PRESSED!');
  };

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
