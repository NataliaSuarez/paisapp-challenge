import { StyleSheet } from 'react-native';

import { Text } from '../../components/Themed';
import InfoCard from '../common/InfoCard';
import { Contact } from './index';

type ContactCardProps = {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <InfoCard
      Icon={() => <Text style={styles.boxText}>{contact.name.charAt(0)}{contact.lastName.charAt(0)}</Text>}
      title={`${contact.name} ${contact.lastName}`}
      description={contact.phone}
      backgroundColor="#CAF0FF"
      color="#68C6E5"
    />
  );
}

const styles = StyleSheet.create({
  boxText: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#68C6E5',
  },
});
