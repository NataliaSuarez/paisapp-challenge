import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import RegisterForm from '../components/RegisterForm';

const width = Dimensions.get('window').width;

export default function RegisterScreen() {

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <Text style={styles.title}>Regístrate</Text>
        <Text style={styles.subtitle}>Comienza a manejar tu vida financiera</Text>
      </View>
      <View style={{ flex: 2, marginBottom: 32 }}>
        <RegisterForm />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005CEE',
    alignItems: 'center',
    width: width,
    paddingTop: (StatusBar.currentHeight || 0) + 53,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 32,
    marginBottom: 24,
    color: '#FFFFFF',
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 28,
  },
  subtitle: {
    marginBottom: 32,
    color: '#AAAAAA',
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
});
