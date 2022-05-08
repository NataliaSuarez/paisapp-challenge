import { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { AuthContext } from '../App'
import TextField from './common/TextField';
import ShadowDefault from './common/Shadow';
import useForm from '../hooks/useForm';
import useLogin from '../hooks/useLogin';
import ErrorModal from './common/ErrorModal';

type LoginFormProps = {
  goToRegister?: any;
};

const paddingHorizontal = 24 * 2;
const widthWithouPadding = Dimensions.get('window').width - paddingHorizontal;
const width = Dimensions.get('window').width;

const LoginForm = ({ goToRegister }: LoginFormProps) => {
  const { logIn }: any = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const initialState = {
    email: '',
    password: '',
  };
  const onSubmit = (values: any) => mutate({
    email: values.email.toLowerCase().trim(),
    password: values.password, // TODO: Add Encode
  });
  const { subscribe, inputs, handleSubmit } = useForm({
    initialState,
    onSubmit
  });
  const { mutate, isLoading } = useLogin({
    onSuccess: () => logIn({ username: inputs.email, password: inputs.password }),
    onError: (e: any) => setModalVisible(true),
  });

  const disabledInput = inputs.password === '' || inputs.email === '';

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
              value={inputs.email}
              autoFocus
              onChangeText={subscribe('email')}
            />
            <TextField
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              textContentType="password"
              secureTextEntry={true}
              stylesOverride={styles.passwordTextfield}
              value={inputs.password}
              onChangeText={subscribe('password')}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.submitContainer}>
        {
          !!goToRegister ? <Text style={styles.registerText}>
            <Text>No tienes cuenta? </Text>
            <Text style={styles.link} onPress={goToRegister}>Regístrate</Text>
          </Text> : <View></View>}
        <ShadowDefault size={[widthWithouPadding, 60]}>
          <TouchableNativeFeedback
            onPress={handleSubmit}
            disabled={disabledInput}
          >
            <View style={[styles.button, ({ opacity: disabledInput ? 0.4 : 1 })]}>
              <Text style={styles.buttonLabel}>{isLoading ?
                (<ActivityIndicator size="small" color="#FAFAFA" />)
                : 'Ingresar'}</Text>
            </View>
          </TouchableNativeFeedback>
        </ShadowDefault>
        <ErrorModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    transition: .3,
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
