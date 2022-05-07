import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import TransactionsCard from './TransactionCard';

export default function TransactionsList() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Últimas transacciones</Text>
      <View style={styles.transactionsContainer}>
        <TransactionsCard />
        <TransactionsCard />
        <TransactionsCard />
        <TransactionsCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  transactionsContainer: {
    width: '100%',
    backgroundColor: "#F9FAFC",
  },
});
