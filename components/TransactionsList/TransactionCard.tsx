import InfoCard from '../common/InfoCard'
import DebitIcon from '../icons/DebitIcon'
import PaymentIcon from '../icons/PaymentIcon'
import { Transaction, TransactionType } from '../../types'

interface TransactionCardProp {
  transaction: Transaction
}

export default function TransactionsCard ({ transaction }: TransactionCardProp) {
  return (
    <InfoCard
      Icon={transaction.type === TransactionType.Debit ? DebitIcon : PaymentIcon}
      title={transaction.title}
      description={transaction.description}
      optional={`$${transaction.total}`}
      backgroundColor={transaction.type === TransactionType.Debit ? '#E4FFF0' : '#F3E4FF'}
      color={transaction.type === TransactionType.Debit ? '#74CC9B' : '#B946FF'}
    />
  )
}
