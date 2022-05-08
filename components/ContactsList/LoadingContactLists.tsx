import { StyleSheet } from 'react-native';

import { View } from '../Themed';
import LoadingInfoCard from '../common/LoadingInfoCard';

export default function LoadingContactsList() {
  return (
    <View>
      <View style={styles.title}></View>
      <View style={styles.divider}></View>
      <View style={styles.list}>
        <LoadingInfoCard />
        <LoadingInfoCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 24,
    backgroundColor: "#AAAAAA",
    marginBottom: 16,
    height: 22,
    width: 65,
  },
  divider: {
    borderBottomColor: '#ACBAC3',
    borderBottomWidth: .2,
    width: '100%',
  },
  list: {
    paddingTop: 24,
    paddingBottom: 14,
    paddingHorizontal: 24,
  },
  contactCard: {
    marginHorizontal: 24,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
});
