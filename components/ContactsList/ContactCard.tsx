import { StyleSheet, Text } from 'react-native'
import { Contact } from '../../types'
import InfoCard from '../common/InfoCard'

interface ContactCardProps {
  contact: Contact
}

export default function ContactCard ({ contact }: ContactCardProps): React.ReactElement {
  return (
    <InfoCard
      Icon={() => <Text style={styles.boxText}>{contact.name.charAt(0)}{contact.lastName.charAt(0)}</Text>}
      title={`${contact.name} ${contact.lastName}`}
      description={contact.phone}
      backgroundColor='#CAF0FF'
      color='#68C6E5'
    />
  )
}

const styles = StyleSheet.create({
  boxText: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#68C6E5'
  }
})
