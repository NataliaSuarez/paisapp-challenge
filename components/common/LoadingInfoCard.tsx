import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors'

export default function LoadingInfoCard() {
  return (
    <View style={styles.infoCard}>
      <View style={styles.leftData}>
        <View style={[styles.actionBox]} />
        <View style={styles.info}>
          <View style={styles.title} />
          <View style={styles.description} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoCard: {
    backgroundColor: Colors.default.white,
    borderRadius: 16,
    height: 92,
    paddingVertical: 24,
    paddingRight: 18,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  leftData: {
    backgroundColor: Colors.default.white,
    flexDirection: 'row'
  },
  actionBox: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.default.textBase,
    borderRadius: 12,
    marginRight: 16,
    opacity: 0.4
  },
  info: {
    backgroundColor: Colors.default.white
  },
  title: {
    backgroundColor: Colors.default.textSecondary,
    opacity: 0.3,
    width: 53,
    height: 22,
    marginBottom: 4,
    borderRadius: 12
  },
  description: {
    color: Colors.default.textBase,
    width: 82,
    height: 16,
    borderRadius: 12
  }
})
