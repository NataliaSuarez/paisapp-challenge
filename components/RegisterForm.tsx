import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  ActivityIndicator, Dimensions, Keyboard, KeyboardAvoidingView,
  Platform, StyleSheet,
  Text, TouchableNativeFeedback, TouchableWithoutFeedback, View
} from 'react-native'
import Colors from '../constants/Colors'
import useForm from '../hooks/useForm'
import useRegister from '../hooks/useRegister'
import ErrorModal from './common/ErrorModal'
import ShadowDefault from './common/Shadow'
import TextField from './common/TextField'

const paddingHorizontal = 24 * 2
const widthWithouPadding = Dimensions.get('window').width - paddingHorizontal

// TODO: Refactor: merge with Login Form
const RegisterForm = (): React.ReactElement => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const initialState = {
    email: '',
    password: ''
  }
  const onSubmit = (values: any): void => mutate(values)
  const { subscribe, inputs } = useForm({
    initialState,
    onSubmit
  })
  const { mutate, isLoading } = useRegister({
    onSuccess: () => navigation.goBack(),
    onError: (e: any) => console.log(e)
  })

  const disabledInput = inputs.password === '' || inputs.email === ''

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputsContainer}>
            <TextField
              label='Email'
              placeholder='Ingresa tu email'
              textContentType='emailAddress'
              keyboardType='email-address'
              dataDetectorTypes='address'
              value={inputs.email}
              autoFocus
              onChangeText={subscribe('email')}
              labelStyleOverride={{ color: Colors.default.softWhite }}
            />
            <TextField
              label='Contraseña'
              placeholder='Ingresa tu contraseña'
              textContentType='password'
              secureTextEntry
              stylesOverride={styles.passwordTextfield}
              value={inputs.password}
              onChangeText={subscribe('password')}
              labelStyleOverride={{ color: Colors.default.softWhite }}
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
            onPress={() => mutate({ email: inputs.email, password: inputs.password })}
            disabled={disabledInput}
          >
            <View style={[styles.button, ({ opacity: disabledInput ? 0.4 : 1 })]}>
              <Text style={styles.buttonLabel}>{isLoading
                ? (<ActivityIndicator size='small' color={Colors.default.softWhite} />)
                : 'Crear cuenta'}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </ShadowDefault>
        <ErrorModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  inputsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  },
  submitContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  passwordTextfield: {
    marginBottom: 17
  },
  registerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.default.mainBase,
    marginBottom: 30
  },
  link: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: Colors.default.accents.secondaryMain,
    marginBottom: 30
  },
  button: {
    width: '100%',
    padding: 19,
    backgroundColor: Colors.default.accents.secondaryMain,
    alignItems: 'center',
    borderRadius: 16,
    transition: 0.3
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.default.mainBase,
    lineHeight: 22,
    fontFamily: 'Poppins_600SemiBold'
  }
})

export default RegisterForm
