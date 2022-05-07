import { StatusBar } from 'expo-status-bar';
// import { Pressable } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import { RootTabScreenProps } from '../types';
import AppLogo from '../components/AppLogo';
import LoginForm from '../components/LoginForm';

const width = Dimensions.get('window').width;

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const [fontLoaded, err] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <AppLogo />
      <LoginForm />
      <StatusBar style="auto" />
    </View>
  );
}

// <Pressable
//   onPress={() => navigation.navigate('Register')}
//   style={({ pressed }) => ({
//     opacity: pressed ? 0.5 : 1,
//   })}>
//   <Text>Go to Register!</Text>
// </Pressable>
// <Pressable
//   onPress={() => logIn({ username: 'lala', password: 'lala' })}
//   style={({ pressed }) => ({
//     opacity: pressed ? 0.5 : 1,
//   })}>
//   <Text>INGRESAR</Text>
// </Pressable>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
    alignItems: 'center',
    width: width,
    padding: 24,
  },
});
