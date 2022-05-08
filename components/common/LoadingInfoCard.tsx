import { StyleSheet } from 'react-native';
import { View } from '../Themed';


export default function LoadingInfoCard() {
  return (
    <View style={styles.infoCard}>
      <View style={styles.leftData}>
        <View style={[styles.actionBox]}>
        </View>
        <View style={styles.info}>
          <View style={styles.title}></View>
          <View style={styles.description}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    height: 92,
    paddingVertical: 24,
    paddingRight: 18,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  leftData: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  actionBox: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AAAAAA',
    borderRadius: 12,
    marginRight: 16,
    opacity: .4,
  },
  info: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    backgroundColor: '#616E7C',
    opacity: .3,
    width: 53,
    height: 22,
    marginBottom: 4,
    borderRadius: 12,
  },
  description: {
    color: '#AAAAAA',
    width: 82,
    height: 16,
    borderRadius: 12,
  },
});
