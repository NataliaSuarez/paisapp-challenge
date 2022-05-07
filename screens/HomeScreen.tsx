import { StyleSheet } from 'react-native';

import { ScrollView, StatusBar } from 'react-native';
import Card from '../components/Card';
import NotificationIcon from '../components/icons/NotificationIcon';
import SearchIcon from '../components/icons/SearchIcon';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false} >
        {/* HEADER COMPONENT */}
        <View style={styles.header}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Hola</Text>
            <Text style={styles.username}>Soy Paisanx</Text>
          </View>
          <View style={styles.actionsContainer}>
            <SearchIcon />
            <NotificationIcon />
          </View>
        </View>
        {/* CARDS COMPONENT */}
        <View style={styles.cardsContainer}>
          <ScrollView horizontal style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
        {/* SERVICES COMPONENT */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Servicios</Text>
          <View style={styles.servicesContainer}>
            <View style={styles.actionBoxContainer}>
              <View style={styles.actionBox}></View>
              <Text style={styles.actionTitle}>Billetera</Text>
            </View>
            <View style={styles.actionBoxContainer}>
              <View style={[styles.actionBox, {
                backgroundColor: "#FEEAD4"
              }]}></View>
              <Text style={styles.actionTitle}>Transferir</Text>
            </View>
            <View style={styles.actionBoxContainer}>
              <View style={[styles.actionBox, {
                backgroundColor: "#EEE3FF"
              }]}></View>
              <Text style={styles.actionTitle}>Pagar</Text>
            </View>
            <View style={styles.actionBoxContainer}>
              <View style={[styles.actionBox, {
                backgroundColor: "#CAF0FF"
              }]}></View>
              <Text style={styles.actionTitle}>Recargar</Text>
            </View>
          </View>
        </View>
        {/* LAST TRANSACTIONS */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Últimas transacciones</Text>
        </View>
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
  scrollContainer: {
    width: '100%',
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 53,
    marginTop: 34,
    paddingHorizontal: 24,
    backgroundColor: "#F9FAFC"
  },
  welcomeContainer: {
    backgroundColor: "#F9FAFC"
  },
  welcomeText: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 30,
    color: "#616E7C"
  },
  username: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    fontSize: 22,
    color: "#334154"
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 57.15,
    justifyContent: 'space-between'
  },
  cardsContainer: {
    width: '100%',
    paddingLeft: 24,
    backgroundColor: "#F9FAFC",
    height: 190,
    marginVertical: 32,
  },
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
  servicesContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: "#F9FAFC",
    justifyContent: 'space-between',
    marginBottom: 32
  },
  actionBoxContainer: {
    backgroundColor: "#F9FAFC",
    height: 108,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionBox: {
    width: 70,
    height: 70,
    backgroundColor: '#E4FFF0',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'

  },
  actionTitle: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: "#616E7C",
  },
  transactionsContainer: {},
});
