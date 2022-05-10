import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Dimensions } from 'react-native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'

import AppLogo from '../components/AppLogo'
import LoginForm from '../components/LoginForm'
import LoadingScreen from './LoadingScreen'

const width = Dimensions.get('window').width

export default function LoginScreen (): React.ReactElement {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontLoaded) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <View style={styles.container}>
      <AppLogo />
      <LoginForm />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
    alignItems: 'center',
    width: width,
    padding: 24
  }
})
