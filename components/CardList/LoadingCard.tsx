import { StyleSheet, Dimensions, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

const width = Dimensions.get('window').width

export default function LoadingCard() {
  return (
    <View style={[styles.defaultBackground, styles.container]}>
      <Text style={[styles.regular, styles.balanceTitle, styles.defaultTextColor]}>Balance</Text>
      <View style={[styles.defaultBackground, styles.balanceNumber]}>
        <View style={[styles.symbol, styles.defaultTextColor]} />
        <View style={[styles.balanceLoading, styles.defaultTextColor]} />
      </View>
      <View style={[styles.cardNumber, styles.defaultTextColor]} />
      <View style={[styles.defaultBackground, styles.cardInfo]}>
        <Text style={[styles.regular, styles.username, styles.defaultTextColor]} />
        <View style={[styles.defaultBackground, styles.expDateContainer]}>
          <Text style={[styles.medium, styles.defaultTextColor, styles.expDateTitle]}>Exp. Date</Text>
          <Text style={[styles.medium, styles.defaultTextColor, styles.expDate]}>{ }</Text>
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
    backgroundColor: '#DBDBDB'
  },
  defaultTextColor: {
    color: Colors.default.textBase,
    opacity: 0.5
  },
  container: {
    flex: 1,
    borderRadius: 24,
    width: width - 48,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 13,
    marginRight: 12,
    marginHorizontal: 24
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
  balanceLoading: {
    backgroundColor: Colors.default.textBase,
    width: 74,
    height: 26,
    borderRadius: 12
  },
  symbol: {
    width: 48,
    height: 30,
    borderRadius: 6,
    backgroundColor: Colors.default.textBase,
    marginRight: 9
  },
  cardNumber: {
    backgroundColor: Colors.default.textBase,
    width: 218,
    height: 22,
    marginVertical: 24,
    borderRadius: 12
  },
  username: {
    backgroundColor: Colors.default.textBase,
    width: 141,
    height: 23,
    borderRadius: 12
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
    backgroundColor: Colors.default.textBase,
    width: 41,
    height: 13,
    borderRadius: 12
  }
})
