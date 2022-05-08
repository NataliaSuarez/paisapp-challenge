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
import { useNavigation } from '@react-navigation/native';

const paddingHorizontal = 24 * 2;
const widthWithouPadding = Dimensions.get('window').width - paddingHorizontal;
const width = Dimensions.get('window').width;

const RegisterForm = () => {
  const navigation = useNavigation();
  const { logIn }: any = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const initialState = {
    email: '',
    password: '',
  };
  const onSubmit = (values: any) => mutate(values);
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
              labelStyleOverride={{ color: '#FAFAFA' }}
            />
            <TextField
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              textContentType="password"
              secureTextEntry={true}
              stylesOverride={styles.passwordTextfield}
              value={inputs.password}
              onChangeText={subscribe('password')}
              labelStyleOverride={{ color: '#FAFAFA' }}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.submitContainer}>
        <Text style={styles.registerText}>
          <Text>Volver a </Text>
          <Text style={styles.link} onPress={() => navigation.goBack()}>Iniciar sesión</Text>
        </Text>
        <ShadowDefault size={[widthWithouPadding, 60]}>
          <TouchableNativeFeedback
            onPress={() => navigation.goBack()}
            disabled={disabledInput}
          >
            <View style={[styles.button, ({ opacity: disabledInput ? 0.4 : 1 })]}>
              <Text style={styles.buttonLabel}>{isLoading ?
                (<ActivityIndicator size="small" color="#FAFAFA" />)
                : 'Crear cuenta'}</Text>
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
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    color: '#F9FAFC',
    marginBottom: 30,
  },
  link: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#738ef1',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    padding: 19,
    backgroundColor: '#738ef1',
    alignItems: 'center',
    borderRadius: 16,
    transition: .3,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFC',
    lineHeight: 22,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default RegisterForm;
