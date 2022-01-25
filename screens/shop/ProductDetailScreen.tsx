import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import DefaultText from '../../components/atoms/DefaultText.component';
import COLORS from '../../constants/theme';
import { useTypedSelector } from '../../store/hooks';
import { productByIdSelector } from '../../store/selectors/products';

interface IProductDetailScreenParams {
  productId: string;
  productTitle: string;
}

const handleAddToCart = () => {
  console.log('ADD TO CART BUTTON!');
};

const ProductDetailScreen: NavigationStackScreenComponent<IProductDetailScreenParams> = ({
  navigation,
}) => {
  const productId = navigation.getParam('productId');
  const selectedProduct = useTypedSelector((state) => productByIdSelector(state, productId));
  return (
    <View>
      {selectedProduct?.imageUrl ? (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: selectedProduct?.imageUrl,
            }}
          />
        </View>
      ) : null}
      <View style={styles.detailsContainer}>
        <Button color={COLORS.primaryColor} title="Add to Cart" onPress={handleAddToCart} />
        <DefaultText style={styles.priceText}>${selectedProduct?.price}</DefaultText>
        <DefaultText>{selectedProduct?.description}</DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 14,
  },
  image: {
    height: 230,
    width: '100%',
  },
  priceText: {
    color: COLORS.normalGrey,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 26,
  },
});

ProductDetailScreen.navigationOptions = ({ navigation }) => {
  const productTitle = navigation.getParam('productTitle');
  return {
    headerTitle: productTitle,
    headerTitleAlign: 'center',
  };
};

export default ProductDetailScreen;
