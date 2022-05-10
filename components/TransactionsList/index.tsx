import { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TransactionsCard from './TransactionCard'
import useTransactions from '../../hooks/useTransactions'
import LoadingInfoCard from '../common/LoadingInfoCard'
import { Transaction } from '../../types'
import NotResultsText from '../common/NotResultsText'
import { UseQueryResult } from 'react-query'
import Colors from '../../constants/Colors'

interface TransactionsListProps {
  search: string
}

export default function TransactionsList({ search }: TransactionsListProps): React.ReactElement {
  const { data, isLoading }: UseQueryResult = useTransactions()
  const transactions = useMemo(() =>
    isLoading
      ? []
      : (data.filter(
        (t: Transaction) => !search || `${t.title} ${t.description}`.toLowerCase().includes(search.toLocaleLowerCase().trim())
      ) || []), [isLoading, data, search])

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{!search ? 'Últimas transacciones' : 'Transacciones'}</Text>
      <View style={styles.transactionsContainer}>
        {
          isLoading
            ? <LoadingInfoCard />
            : transactions.length === 0
              ? (<NotResultsText label='Transacciones' />)
              : transactions.map((transaction: Transaction, i: number) => {
                return (
                  <TransactionsCard key={`${transaction.id}-${i}`} transaction={transaction} />
                )
              })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: Colors.default.mainBase,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    color: Colors.default.textMain,
    marginBottom: 24
  },
  transactionsContainer: {
    width: '100%',
    backgroundColor: Colors.default.mainBase
  }
})
