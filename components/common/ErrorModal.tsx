import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Modal
} from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import Colors from '../../constants/Colors'

interface ErrorModalProps {
  modalVisible: boolean
  setModalVisible: any
}

const paddingHorizontal = 24 * 2
const widthWithouPadding = Dimensions.get('window').width - paddingHorizontal
const width = Dimensions.get('window').width

const ErrorModal = ({ modalVisible, setModalVisible }: ErrorModalProps) => {
  return (
    <Modal
      animationType='fade'
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false)
      }}
    >
      <View style={styles.modalContainer}>
        <Shadow offset={[0, 0]} radius={30} size={[widthWithouPadding, 92]} startColor='rgba(0, 0, 0, 0.07)'>
          <View style={styles.modal}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={styles.errorDescription}>No se pudo iniciar sesión</Text>
              <Text style={styles.tryAgainDescription}>Intentar nuevamente</Text>
            </Pressable>
          </View>
        </Shadow>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: width
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthWithouPadding,
    height: 92,
    backgroundColor: Colors.default.softWhite,
    borderRadius: 20,
    paddingTop: 24,
    paddingBottom: 26
  },
  errorDescription: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: Colors.default.textSecondary,
    marginBottom: 16
  },
  tryAgainDescription: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: Colors.default.primary
  }
})

export default ErrorModal
