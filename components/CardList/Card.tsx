import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import CardLogo from '../icons/CardLogo'
import { Card as CardType } from './index'

const width = Dimensions.get('window').width

const encriptCardNumber = (cardNumber: string): string => `**** **** **** ${cardNumber.split(' ')[3]}`

interface CardProps {
  card: CardType
  styleOverride: object | undefined
  userName: string
}

export default function Card ({ card, userName, styleOverride }: CardProps): React.ReactElement {
  return (
    // TODO: Refactor: simplify styles and merge with Loading Card
    <View style={[styles.defaultBackground, styles.container, styleOverride]}>
      <View style={[styles.defaultBackground, { flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }]}>
        <View style={[styles.defaultBackground, { flexDirection: 'column' }]}>
          <Text style={[styles.regular, styles.balanceTitle, styles.defaultTextColor]}>Balance</Text>
          <View style={[styles.defaultBackground, styles.balanceNumber]}>
            <Text style={[styles.medium, styles.symbol, styles.defaultTextColor]}>{card.symbol}</Text>
            <Text style={[styles.medium, styles.balance, styles.defaultTextColor]}>{card.balance}</Text>
          </View>
        </View>
        <CardLogo />
      </View>
      <Text style={[styles.regular, styles.cardNumber, styles.defaultTextColor]}>{encriptCardNumber(card.number)}</Text>
      <View style={[styles.defaultBackground, styles.cardInfo]}>
        <Text style={[styles.regular, styles.username, styles.defaultTextColor]}>{userName}</Text>
        <View style={[styles.defaultBackground, styles.expDateContainer]}>
          <Text style={[styles.medium, styles.defaultTextColor, styles.expDateTitle]}>Exp. Date</Text>
          <Text style={[styles.medium, styles.defaultTextColor, styles.expDate]}>{card.expDate}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400'
  },
  medium: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500'
  },
  defaultBackground: {
    backgroundColor: Colors.default.primary
  },
  defaultTextColor: {
    color: Colors.default.white
  },
  container: {
    flex: 1,
    borderRadius: 24,
    width: width - 48,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 13,
    marginRight: 12
  },
  balanceTitle: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8
  },
  balanceNumber: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  symbol: {
    fontSize: 14,
    lineHeight: 22,
    paddingLeft: 10,
    paddingRight: 9,
    paddingVertical: 4,
    width: 48,
    height: 30,
    borderRadius: 6,
    backgroundColor: Colors.default.accents.secondaryBase, /// TODO: Change by linear-gradient
    marginRight: 9,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  balance: {
    fontSize: 22,
    lineHeight: 28,
    height: 26
  },
  cardNumber: {
    fontSize: 22,
    lineHeight: 28,
    textAlignVertical: 'center',
    marginVertical: 24,
    height: 22
  },
  username: {
    fontSize: 16,
    lineHeight: 22
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  expDateContainer: {
    alignItems: 'center'
  },
  expDateTitle: {
    fontSize: 10,
    lineHeight: 15
  },
  expDate: {
    fontSize: 13,
    lineHeight: 19.5
  }
})
