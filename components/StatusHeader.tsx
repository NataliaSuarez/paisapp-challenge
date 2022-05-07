import { StyleSheet } from 'react-native';

import NotificationIcon from '../components/icons/NotificationIcon';
import SearchIcon from '../components/icons/SearchIcon';
import { Text, View } from '../components/Themed';

export default function StatusHeader() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
