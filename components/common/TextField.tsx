import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

type TextFieldProps = {
  label: string;
  placeholder: string;
  onChangeText: any;
  stylesOverride: any;
  inputProps: object;
}

const paddingHorizontal = 24 * 2;
const width = Dimensions.get('window').width - paddingHorizontal;

const TextField = ({ label, placeholder, onChangeText, stylesOverride, ...inputProps }: TextFieldProps) => {
  return (
    <View style={[styles.texfield, stylesOverride]}>
      <Text style={styles.label}>{label}</Text>
      <Shadow offset={[0, 8]} radius={30} startColor="rgba(0, 0, 0, 0.01)" size={[width, 54]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          disableFullscreenUI
          selectionColor='#AAAAAA'
          placeholderTextColor='#AAAAAA'
          {...inputProps}
        />
      </Shadow>
    </View >
  );
};

const styles = StyleSheet.create({
  texfield: {
    width: '100%',
    marginBottom: 24,
  },
  label: {
    color: '#334154',
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    lineHeight: 22,
    marginBottom: 16,
  },
  input: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    lineHeight: 20,
    backgroundColor: '#FFFFFF',
    padding: 16,
    height: 54,
    width: '100%',
    borderRadius: 12,
  },
});

export default TextField;
