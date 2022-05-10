import { StyleSheet, Text } from 'react-native'

interface NotResultsTextProps {
  label: string
}

export default function NotResultsText({ label }: NotResultsTextProps) {
  return (
    <Text style={styles.notResults}>No se han encontrado {label}</Text>
  )
}

const styles = StyleSheet.create({
  notResults: {
    height: 108,
    color: '#717E95',
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24
  }
})
