import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import PaymentIcon from '../icons/PaymentIcon';
import { Contact } from './index';

type ContactCardProps = {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <View style={styles.contactCard}>
      <View style={styles.leftData}>
        <View style={styles.actionBox}>
          <PaymentIcon />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{contact.name} {contact.lastName}</Text>
          <Text style={styles.description}>{contact.phone}</Text>
        </View>
      </View>
      <Text style={styles.total}>$125</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    height: 92,
    paddingVertical: 24,
    paddingRight: 18,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  leftData: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  actionBox: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3E4FF',
    borderRadius: 12,
    marginRight: 16,
  },
  info: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#616E7C',
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4,
  },
  description: {
    color: '#AAAAAA',
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
  },
  total: {
    color: '#B946FF',
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    alignSelf: 'center',
  }
});
