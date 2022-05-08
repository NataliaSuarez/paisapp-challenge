import { StyleSheet, TextInput } from 'react-native';

import SearchIcon from './icons/SearchIcon';
import { View } from '../components/Themed';

type SearchContactsProps = {
  search: string;
  setSearch: any;
}

export default function SearchContacts({ search, setSearch }: SearchContactsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.search}><SearchIcon color="#AAAAAA" /></View>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un nombre o un número"
        onChangeText={setSearch}
        value={search}
      />
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
    width: "100%"
  },
});
