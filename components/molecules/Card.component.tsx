import React from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import COLORS from '../../constants/theme';
import DefaultText from '../atoms/DefaultText.component';

interface ICardProps {
  title: string;
  content: string | number;
  imageUrl?: string;
  actions?: IActionsProps[];
}

export interface IActionsProps {
  label: string;
  onPress?: () => void;
}

const Card = (props: ICardProps) => {
  const { title, content, imageUrl, actions = [] } = props;
  const formattedCurrencyContent =
    typeof content === 'number' ? `$ ${content.toFixed(2)}` : content;
  return (
    <View style={styles.card}>
      {imageUrl ? (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
          />
        </View>
      ) : null}
      <View style={styles.detailsContainer}>
        <DefaultText style={styles.titleText}>{title}</DefaultText>
        <DefaultText style={styles.contentText}>{formattedCurrencyContent}</DefaultText>
      </View>
      {/* TODO: check what to do with onPress prop if it's optional */}
      {/* TODO: how to set button's height?? is not recognizing the property or margin either  */}
      {actions.length ? (
        <View style={styles.actionsContainer}>
          {actions.map((action) => (
            <View key={actions.indexOf(action)}>
              <Button
                color={COLORS.primaryColor}
                title={action.label}
                onPress={() => (action.onPress ? action.onPress() : {})}
              />
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 14,
    marginTop: 2,
  },
  card: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 18,
  },
  contentText: {
    color: COLORS.normalGrey,
  },
  detailsContainer: {
    alignItems: 'center',
    margin: 14,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 135,
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 16,
  },
});

export default Card;
