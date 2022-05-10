import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import PaisappLogo from './icons/PaisappLogo'

interface AppLogoProps {
  hasSubtitle?: boolean
}

const AppLogo = ({ hasSubtitle = true }: AppLogoProps): React.ReactElement => {
  return (
    <View style={[styles.container, !hasSubtitle && { flex: 0 }]}>
      <PaisappLogo style={styles.logo} />
      <Text style={styles.title}>Paisapp</Text>
      {
        hasSubtitle
          ? <Text style={styles.subtitle}>Comienza a manejar tu vida financiera</Text>
          : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (StatusBar.currentHeight || 0) + 53,
    marginBottom: 40
  },
  logo: { marginBottom: 12 },
  title: {
    color: Colors.default.primary,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 60,
    marginBottom: 12
  },
  subtitle: {
    color: '#717E95', // todo: add in colors as gray 600
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24
  }
})

export default AppLogo
