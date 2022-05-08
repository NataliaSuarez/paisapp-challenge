import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import ContactCard from './ContactCard';

export type Contact = {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  contacted: string;
}

type ContactsListProps = {
  label: string;
  contacts: Contact[];
};

export default function ContactsList({ label, contacts }: ContactsListProps) {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <View style={styles.divider}></View>
      <View style={styles.list}>
        {contacts.map((contact) => {
          return (
            <ContactCard key={contact.id} contact={contact} />
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 24,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: "#AAAAAA",
    marginBottom: 16,
  },
  divider: {
    borderBottomColor: '#ACBAC3',
    borderBottomWidth: .2,
    width: '100%',
  },
  list: {
    paddingTop: 24,
    paddingBottom: 14,
    paddingHorizontal: 24,
  },
  contactCard: {
    marginHorizontal: 24,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
});
