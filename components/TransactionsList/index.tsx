import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import TransactionsCard from './TransactionCard';
import useTransactions from '../../hooks/useTransactions';
import LoadingInfoCard from '../common/LoadingInfoCard';
import { Transaction } from '../../types';

export default function TransactionsList() {
  const { data, isLoading } = useTransactions();
  const transactions = useMemo(() => isLoading ? [] : data, [isLoading, data])

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Últimas transacciones</Text>
      <View style={styles.transactionsContainer}>
        {
          isLoading
            ?
            <LoadingInfoCard />
            : transactions.map((transaction: Transaction, i: number) => {
              return (
                <TransactionsCard key={`${transaction.id}-${i}`} transaction={transaction} />
              )
            })
        }
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
