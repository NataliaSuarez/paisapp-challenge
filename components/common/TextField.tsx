import { StyleSheet, Text, TextInput, View } from 'react-native';

type TextFieldProps = {
  label: string;
  placeholder: string;
  onChangeText: any;
  stylesOverride: any;
  inputProps: object;
}

const TextField = ({ label, placeholder, onChangeText, stylesOverride, ...inputProps }: TextFieldProps) => {
  return (
    <View style={[styles.texfield, stylesOverride]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        disableFullscreenUI
        {...inputProps}
      />
    </View>
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
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 30,
    borderRadius: 12,
  },
});

export default TextField;
