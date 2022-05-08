import { StyleSheet } from 'react-native';

import { ScrollView, StatusBar, Dimensions } from 'react-native';
import BackHeader from '../components/BackHeader';
import SearchContacts from '../components/SearchContacts';
import ContactsList from '../components/ContactsList';
import { View } from '../components/Themed';

const width = Dimensions.get('window').width;

const recents = [
  {
    "id": 1,
    "name": "Belen",
    "lastName": "Salvador",
    "phone": "+541155634422",
    "contacted": "2022-05-06T01:11:39.326Z"
  },
  {
    "id": 2,
    "name": "Jorge",
    "lastName": "Cruz",
    "phone": "+541122334521",
    "contacted": "2022-05-05T01:11:39.326Z"
  }
];


const all = [{
  "id": 1,
  "name": "Belen",
  "lastName": "Salvador",
  "phone": "+541155634422",
  "contacted": "2022-05-06T01:11:39.326Z"
},
{
  "id": 2,
  "name": "Jorge",
  "lastName": "Cruz",
  "phone": "+541122334521",
  "contacted": "2022-05-05T01:11:39.326Z"
},
{
  "id": 3,
  "name": "Ronaldo",
  "lastName": "Martins",
  "phone": "+541122334212",
  "contacted": "2022-04-28T01:11:39.326Z"
},
{
  "id": 4,
  "name": "Lidia",
  "lastName": "Roldan",
  "phone": "+541129994212",
  "contacted": "2022-04-28T01:11:39.326Z"
},
{
  "id": 5,
  "name": "Monica",
  "lastName": "Lopez",
  "phone": "+541145024212",
  "contacted": "2022-04-23T01:11:39.326Z"
},
{
  "id": 6,
  "name": "Carlos",
  "lastName": "Martins",
  "phone": "+541112344212",
  "contacted": "2022-04-22T01:11:39.326Z"
}];

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <BackHeader label="Contactos" />
      </View>
      <ScrollView style={styles.scrollContainer} >
        <SearchContacts />
        <ContactsList contacts={recents} label="Recents" />
        <ContactsList contacts={all} label="All" />
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
