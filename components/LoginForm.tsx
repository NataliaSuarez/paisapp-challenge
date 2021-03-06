import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react'
import {
  ActivityIndicator, Dimensions, Keyboard, KeyboardAvoidingView,
  Platform, StyleSheet,
  Text, TouchableNativeFeedback, TouchableWithoutFeedback, View
} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { AuthContext } from '../App'
import Colors from '../constants/Colors'
import useForm from '../hooks/useForm'
import useLogin from '../hooks/useLogin'
import ErrorModal from './common/ErrorModal'
import ShadowDefault from './common/Shadow'
import TextField from './common/TextField'

const paddingHorizontal = 24 * 2
const widthWithouPadding = Dimensions.get('window').width - paddingHorizontal

// TODO: Refactor: merge with Register Form
const LoginForm = (): React.ReactElement => {
  const navigation = useNavigation()
  const { logIn }: any = useContext(AuthContext)
  const [modalVisible, setModalVisible] = useState(false)
  const initialState = {
    email: '',
    password: '',
    remind: false
  }
  const onSubmit = (values: any): void => mutate({
    email: values.email.toLowerCase().trim(),
    password: values.password // TODO: Add Encode
  })
  const { subscribe, inputs, handleSubmit } = useForm({
    initialState,
    onSubmit
  })
  const { mutate, isLoading } = useLogin({
    onSuccess: () => logIn({ username: inputs.email, password: inputs.password }),
    onError: (e: any) => setModalVisible(true)
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
            />
            <TextField
              label='Contrase??a'
              placeholder='Ingresa tu contrase??a'
              textContentType='password'
              secureTextEntry
              stylesOverride={styles.passwordTextfield}
              value={inputs.password}
              onChangeText={subscribe('password')}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <BouncyCheckbox
                size={18}
                fillColor='#DBDBDB'
                unfillColor='#DBDBDB'
                isChecked={inputs.remind}
                onPress={subscribe('remind')}
                style={{ width: 18, marginRight: 8 }}
                iconStyle={{
                  borderRadius: 6
                }}
              />
              <Text style={styles.checkboxLabel}>Recordarme</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.submitContainer}>
        <Text style={styles.registerText}>
          <Text>No tienes cuenta? </Text>
          <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Reg??strate</Text>
        </Text>
        <ShadowDefault size={[widthWithouPadding, 60]}>
          <TouchableNativeFeedback
            onPress={handleSubmit}
            disabled={disabledInput}
          >
            <View style={[styles.button, ({ opacity: disabledInput ? 0.4 : 1 })]}>
              <Text style={styles.buttonLabel}>{isLoading
                ? (<ActivityIndicator size='small' color={Colors.default.softWhite} />)
                : 'Ingresar'}
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
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: Colors.default.textSecondary,
    marginBottom: 30
  },
  link: {
    color: Colors.default.accents.secondaryMain
  },
  button: {
    width: '100%',
    padding: 19,
    backgroundColor: Colors.default.primary,
    alignItems: 'center',
    borderRadius: 16,
    transition: 0.3
  },
  buttonLabel: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    fontSize: 16,
    color: Colors.default.white,
    lineHeight: 22
  },
  checkboxLabel: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.default.textBase
  }
})

export default LoginForm
