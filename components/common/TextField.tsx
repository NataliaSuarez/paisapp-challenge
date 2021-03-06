import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../constants/Colors'
import ShadowDefault from './Shadow'

interface TextFieldProps {
  label: string
  placeholder: string
  onChangeText: any
  stylesOverride: any
  inputProps: object
  labelStyleOverride: any
}

const paddingHorizontal = 24 * 2
const width = Dimensions.get('window').width - paddingHorizontal

const TextField = ({ label, placeholder, onChangeText, stylesOverride, labelStyleOverride, ...inputProps }: TextFieldProps): React.ReactElement => {
  return (
    <View style={[styles.texfield, stylesOverride]}>
      <Text style={[styles.label, labelStyleOverride]}>{label}</Text>
      <ShadowDefault size={[width, 54]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          disableFullscreenUI
          selectionColor={Colors.default.textBase}
          placeholderTextColor={Colors.default.textBase}
          {...inputProps}
        />
      </ShadowDefault>
    </View>
  )
}

const styles = StyleSheet.create({
  texfield: {
    width: '100%',
    marginBottom: 24
  },
  label: {
    color: Colors.default.textMain,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    lineHeight: 22,
    marginBottom: 16
  },
  input: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    lineHeight: 20,
    backgroundColor: Colors.default.white,
    padding: 16,
    height: 54,
    width: '100%',
    borderRadius: 12
  }
})

export default TextField
