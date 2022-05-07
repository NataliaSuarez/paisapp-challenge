import { StyleSheet } from 'react-native';

import { ScrollView, StatusBar, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const width = Dimensions.get('window').width;

const encriptCardNumber = (cardNumber: string) => `**** **** **** ${cardNumber.split(' ')[3]}`;

export default function Card() {
  const cardNumber = '1211 1222 1233 1234'
  return (
    <View style={[styles.defaultBackground, styles.container]}>
      <Text style={[styles.regular, styles.balanceTitle, styles.defaultTextColor]}>Balance</Text>
      <View style={[styles.defaultBackground, styles.balanceNumber]}>
        <Text style={[styles.medium, styles.symbol, styles.defaultTextColor]}>USD</Text>
        <Text style={[styles.medium, styles.balance, styles.defaultTextColor]}>978.85</Text>
      </View>
      <Text style={[styles.regular, styles.cardNumber, styles.defaultTextColor]}>{encriptCardNumber(cardNumber)}</Text>
      <View style={[styles.defaultBackground, styles.cardInfo]}>
        <Text style={[styles.regular, styles.username, styles.defaultTextColor]}>Soy Paisanx</Text>
        <View style={[styles.defaultBackground, styles.expDateContainer]}>
          <Text style={[styles.medium, styles.defaultTextColor, styles.expDateTitle]}>Exp. Date</Text>
          <Text style={[styles.medium, styles.defaultTextColor, styles.expDate]}>02/30</Text>
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
