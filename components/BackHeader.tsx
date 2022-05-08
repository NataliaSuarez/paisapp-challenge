import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import BackIcon from './icons/BackIcon';

export default function BackHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.back} onPress={() => navigation.goBack()}><BackIcon /></Text>
      <Text style={styles.title} onPress={() => navigation.goBack()}>Contactos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    height: 28,
    marginTop: 34,
    paddingHorizontal: 24,
    backgroundColor: "#F9FAFC",
  },
  back: {
    marginRight: 24,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    fontSize: 22,
    color: "#334154",
  },
});
