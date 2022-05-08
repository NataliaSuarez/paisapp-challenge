import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import TransactionsCard from './TransactionCard';

const transactions = [
  {
    "id": 1,
    "type": "PAYMENT",
    "title": "Adobe",
    "description": "Pago de suscripción",
    "total": 125
  },
  {
    "id": 2,
    "type": "DEBIT",
    "title": "Juan David",
    "description": "Pago recibido",
    "total": 95
  },
  {
    "id": 3,
    "type": "PAYMENT",
    "title": "Figma",
    "description": "Pago de suscripción",
    "total": 200
  },
  {
    "id": 4,
    "type": "PAYMENT",
    "title": "VSCode",
    "description": "Pago de suscripción",
    "total": 125
  },
  {
    "id": 5,
    "type": "PAYMENT",
    "title": "Carrefour",
    "description": "Pago en tienda",
    "total": 2000
  },
  {
    "id": 2,
    "type": "DEBIT",
    "title": "Carla Perez",
    "description": "Pago recibido",
    "total": 77.55
  }
];

export enum TransactionType {
  Debit = 'DEBIT',
  Payment = 'PAYMENT',
}

export type Transaction = {
  id: number;
  type: TransactionType;
  title: string;
  description: string;
  total: number;
}

export default function TransactionsList() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Últimas transacciones</Text>
      <View style={styles.transactionsContainer}>
        {
          transactions.map((transaction) => {
            return (
              <TransactionsCard key={transaction.id} transaction={transaction} />
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
