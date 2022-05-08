import { StyleSheet } from 'react-native';

import SearchIcon from './icons/SearchIcon';
import { Text, View } from '../components/Themed';

export default function SearchContacts() {
  return (
    <View style={styles.container}>
      <View style={styles.search}><SearchIcon color="#AAAAAA" /></View>
      <Text style={styles.input}>Ingresa un nombre o un número</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginHorizontal: 24,
    marginTop: 46,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 21,
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
  },
  search: {
    marginRight: 19.71,
  },
  input: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 12,
    color: "#AAAAAA",
  },
});
