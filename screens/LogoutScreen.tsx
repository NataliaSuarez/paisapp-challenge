import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';

import { AuthContext } from '../App';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import useColorScheme from '../hooks/useColorScheme';


export default function LogoutScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const colorScheme = useColorScheme();

  const { logOut }: any = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable
        onPress={() => logOut()}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}>
        <Text>CERRAR SESION</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Modal')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}>
        <Text>modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
