import { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { AuthContext } from '../App'
import TextField from './common/TextField';

type LoginFormProps = {
  goToRegister: any;
};

const LoginForm = ({ goToRegister }: LoginFormProps) => {
  const { logIn }: any = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputsContainer}>
            <TextField
              label="Email"
              placeholder="Ingresa tu email"
              textContentType="emailAddress"
              keyboardType="email-address"
              dataDetectorTypes="address"
              defaultValue={email}
              autoFocus
              onChangeText={(t) => {
                setEmail(t);
              }}
            />
            <TextField
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              textContentType="password"
              secureTextEntry={true}
              stylesOverride={styles.passwordTextfield}
              defaultValue={password}
              onChangeText={(t) => {
                setPassword(t);
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.submitContainer}>
        <Text style={styles.registerText}>
          <Text>No tienes cuenta? </Text>
          <Text style={styles.link} onPress={goToRegister}>Regístrate</Text>
        </Text>
        <TouchableNativeFeedback
          onPress={() => logIn({ username: 'lala', password: 'lala' })}
          disabled={password === '' || email === ''}
        >
          <View style={[styles.button, ({ opacity: password === '' || email === '' ? 0.4 : 1 })]}>
            <Text style={styles.buttonLabel}>Ingresar</Text>
          </View>
        </TouchableNativeFeedback>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%',
  },
  inputsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  submitContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  passwordTextfield: {
    marginBottom: 17,
  },
  registerText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#616E7C',
    marginBottom: 30,
  },
  link: {
    color: '#738ef1',
  },
  button: {
    width: '100%',
    padding: 19,
    backgroundColor: '#005CEE',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 22,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default LoginForm;
