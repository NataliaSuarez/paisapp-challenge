import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';
import { Text, View } from '../Themed';
import { Card as CardType } from './index';

const width = Dimensions.get('window').width;

const encriptCardNumber = (cardNumber: string) => `**** **** **** ${cardNumber.split(' ')[3]}`;

type CardProps = {
  card: CardType;
  styleOverride: object | undefined;
}

export default function Card({ card, styleOverride }: CardProps) {

  return (
    <View style={[styles.defaultBackground, styles.container, styleOverride]}>
      <Text style={[styles.regular, styles.balanceTitle, styles.defaultTextColor]}>Balance</Text>
      <View style={[styles.defaultBackground, styles.balanceNumber]}>
        <Text style={[styles.medium, styles.symbol, styles.defaultTextColor]}>{card.symbol}</Text>
        <Text style={[styles.medium, styles.balance, styles.defaultTextColor]}>{card.balance}</Text>
      </View>
      <Text style={[styles.regular, styles.cardNumber, styles.defaultTextColor]}>{encriptCardNumber(card.number)}</Text>
      <View style={[styles.defaultBackground, styles.cardInfo]}>
        <Text style={[styles.regular, styles.username, styles.defaultTextColor]}>Soy Paisanx</Text>
        <View style={[styles.defaultBackground, styles.expDateContainer]}>
          <Text style={[styles.medium, styles.defaultTextColor, styles.expDateTitle]}>Exp. Date</Text>
          <Text style={[styles.medium, styles.defaultTextColor, styles.expDate]}>{card.expDate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: "400",
  },
  medium: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: "500",
  },
  defaultBackground: {
    backgroundColor: "#005CEE",
  },
  defaultTextColor: {
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    borderRadius: 24,
    width: width - 48,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 13,
    marginRight: 12,
  },
  balanceTitle: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
  },
  balanceNumber: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  symbol: {
    fontSize: 14,
    lineHeight: 22,
    paddingLeft: 10,
    paddingRight: 9,
    paddingVertical: 4,
    width: 48,
    borderRadius: 6,
    backgroundColor: "#89A5FB", /// TODO: Change by linear-gradient
    marginRight: 9,
    textAlign: 'center',
  },
  balance: {
    fontSize: 22,
    lineHeight: 28,
  },
  cardNumber: {
    fontSize: 22,
    lineHeight: 28,
    textAlignVertical: 'center',
    marginVertical: 24,
    height: 22,
  },
  username: {
    fontSize: 16,
    lineHeight: 22,
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expDateContainer: {
    alignItems: 'center',
  },
  expDateTitle: {
    fontSize: 10,
    lineHeight: 15
  },
  expDate: {
    fontSize: 13,
    lineHeight: 19.5
  },
});
