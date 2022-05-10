import { StyleSheet, Text, View } from 'react-native'

import ContactCard from './ContactCard'
import { Contact } from '../../types'
import Colors from '../../constants/Colors'

interface ContactsListProps {
  label: string
  contacts: Contact[]
}

export default function ContactsList({ label, contacts }: ContactsListProps) {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <View style={styles.divider} />
      <View style={styles.list}>
        {contacts.map((contact: Contact, i: number) => {
          return (
            <ContactCard key={`${contact.id}-${i}`} contact={contact} />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 24,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.default.textBase,
    marginBottom: 16
  },
  divider: {
    borderBottomColor: '#ACBAC3',
    borderBottomWidth: 0.2,
    width: '100%'
  },
  list: {
    paddingTop: 24,
    paddingBottom: 14,
    paddingHorizontal: 24
  },
  contactCard: {
    marginHorizontal: 24,
    marginBottom: 16,
    backgroundColor: Colors.default.white
  }
})
