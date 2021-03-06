import { useContext } from 'react'
import { StyleSheet, StatusBar, Dimensions, Text, View } from 'react-native'

import { AuthContext } from '../App'
import BackHeader from '../components/BackHeader'
import { RootTabScreenProps } from '../types'
import AppLogo from '../components/AppLogo'
import Colors from '../constants/Colors'

const width = Dimensions.get('window').width

export default function LogoutScreen({ navigation }: RootTabScreenProps<'Logout'>): React.ReactElement {
  const { logOut }: any = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <BackHeader label='Volver' />
      </View>
      <View style={{ width: width, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AppLogo hasSubtitle={false} />
        <Text style={styles.text}>Ya te vas?</Text>
        <Text style={[styles.text, styles.link]}>
          <Text>Volver a </Text>
          <Text style={styles.link} onPress={() => navigation.goBack()}>mi cuenta</Text>
        </Text>
        <Text style={styles.logoutText} onPress={logOut}>Cerrar Sesión</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.default.mainBase
  },
  backContainer: {
    marginTop: 34,
    zIndex: 100
  },
  text: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    color: Colors.default.textSecondary,
    marginBottom: 16
  },
  link: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: Colors.default.accents.secondaryMain,
    marginBottom: 30
  },
  logoutText: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: Colors.default.primary
  }
})
