import { StyleSheet, Text, View, StatusBar } from 'react-native';

import PaisappLogo from './icons/PaisappLogo';

type AppLogoProps = {
  hasSubtitle?: boolean;
};

const AppLogo = ({ hasSubtitle = true }: AppLogoProps) => {
  return (
    <View style={[styles.container, !hasSubtitle && { flex: 0 }]}>
      <PaisappLogo style={styles.logo} />
      <Text style={styles.title}>Paisapp</Text>
      {
        hasSubtitle ?
          <Text style={styles.subtitle}>Comienza a manejar tu vida financiera</Text>
          : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (StatusBar.currentHeight || 0) + 53,
    marginBottom: 40,
  },
  logo: { marginBottom: 12 },
  title: {
    color: '#005CEE',
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 60,
    marginBottom: 12,
  },
  subtitle: {
    color: '#717E95',
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AppLogo;
