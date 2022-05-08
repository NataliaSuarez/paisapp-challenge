import { StyleSheet, ScrollView, StatusBar } from 'react-native';

import { View } from '../components/Themed';
import CardList from '../components/CardList';
import StatusHeader from '../components/StatusHeader';
import ServiciosMenu from '../components/ServiciosMenu';
import TransactionsList from '../components/TransactionsList';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false} >
        <StatusHeader />
        <CardList />
        <ServiciosMenu />
        <TransactionsList />
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
