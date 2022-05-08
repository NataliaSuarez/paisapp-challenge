import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { ScrollView, StatusBar, Dimensions } from 'react-native';
import BackHeader from '../components/BackHeader';
import SearchContacts from '../components/SearchContacts';
import ContactsList from '../components/ContactsList';
import { View } from '../components/Themed';
import useContacts from '../hooks/useContacts';
import { Contact } from '../components/ContactsList/index'
import LoadingContactsList from '../components/ContactsList/LoadingContactLists'

const width = Dimensions.get('window').width;

const recent = (a: Contact, b: Contact) => {
  if (new Date(a.contacted) > new Date(b.contacted)) return -1;
  if (new Date(a.contacted) < new Date(b.contacted)) return 1;
  return 0;
}

export default function ContactsScreen() {
  const { data, isLoading } = useContacts();
  const all = useMemo(() => isLoading ? [] : data, [isLoading, data]);
  const recents = useMemo(() => {
    if (isLoading) return [];
    const [latest, penultimate] = [...data].sort(recent);
    return [latest, penultimate];
  }, [isLoading, data, recent]);


  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <BackHeader label="Contactos" />
      </View>
      <ScrollView style={styles.scrollContainer} >
        <SearchContacts />
        {
          isLoading ?
            <>
              <LoadingContactsList />
              <LoadingContactsList />
            </>
            :
            <>
              <ContactsList contacts={recents} label="Recents" />
              <ContactsList contacts={all} label="All" />
            </>
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'flex-start',
    backgroundColor: "#F9FAFC"
  },
  backContainer: {
    marginTop: 34,
    zIndex: 100,
  },
  scrollContainer: {
    width: width,
    flex: 1,
  },
});
