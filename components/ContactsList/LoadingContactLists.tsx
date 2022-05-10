import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors'
import LoadingInfoCard from '../common/LoadingInfoCard'

export default function LoadingContactsList (): React.ReactElement {
  return (
    <View>
      <View style={styles.title} />
      <View style={styles.divider} />
      <View style={styles.list}>
        <LoadingInfoCard />
        <LoadingInfoCard />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 24,
    backgroundColor: Colors.default.textBase,
    marginBottom: 16,
    height: 22,
    width: 65,
    borderRadius: 12
  },
  divider: {
    borderBottomColor: '#ACBAC3',
    borderBottomWidth: 0.2,
    width: '100%'
  },
  list: {
    paddingTop: 24,
    paddingBottom: 14,
    paddingHorizontal: 24
  },
  contactCard: {
    marginHorizontal: 24,
    marginBottom: 16,
    backgroundColor: Colors.default.white
  }
})
