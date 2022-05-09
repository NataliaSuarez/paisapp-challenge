import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useState } from 'react';
import { View } from '../components/Themed';
import CardList from '../components/CardList';
import StatusHeader from '../components/StatusHeader';
import ServiciosMenu from '../components/ServiciosMenu';
import TransactionsList from '../components/TransactionsList';

export default function HomeScreen() {

  const [editing, setEditing] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false} >
        <StatusHeader
          editing={editing}
          setEditing={setEditing}
          search={search}
          setSearch={setSearch}
        />
        {!editing ?
          <CardList />
          : <View style={{ marginTop: 32 }}></View>
        }
        <ServiciosMenu search={search} />
        <TransactionsList search={search} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'flex-start',
    backgroundColor: "#F9FAFC"
  },
  scrollContainer: {
    width: '100%',
    flex: 1,
  },
  sectionContainer: {
    backgroundColor: "#F9FAFC",
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    color: "#334154",
    marginBottom: 24,
  },
});
