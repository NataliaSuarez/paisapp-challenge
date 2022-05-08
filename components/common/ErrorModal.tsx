import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Modal,
} from 'react-native';
import ShadowDefault from './Shadow';

type ErrorModalProps = {
  modalVisible: boolean;
  setModalVisible: any;
};

const paddingHorizontal = 24 * 2;
const widthWithouPadding = Dimensions.get('window').width - paddingHorizontal;
const width = Dimensions.get('window').width;

const ErrorModal = ({ modalVisible, setModalVisible }: ErrorModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        <ShadowDefault size={[widthWithouPadding, 92]} startColor="rgba(0, 0, 0, 0.05)">
          <View style={styles.modal}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.errorDescription}>No se pudo iniciar sesión!</Text>
              <Text style={styles.tryAgainDescription}>Try again</Text>
            </Pressable>
          </View>
        </ShadowDefault>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    width: width,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    width: widthWithouPadding,
    height: 92,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 24,
    paddingBottom: 26,
  },
  errorDescription: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#616E7C',
    marginBottom: 16,
  },
  tryAgainDescription: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#005CEE',
  }
});

export default ErrorModal;
