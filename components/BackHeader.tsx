import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import BackIcon from './icons/BackIcon'

interface BackHeaderProps {
  label: string
}

export default function BackHeader ({ label }: BackHeaderProps): React.ReactElement {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <Text style={styles.back} onPress={() => navigation.goBack()}><BackIcon /></Text>
      <Text style={styles.title} onPress={() => navigation.goBack()}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    height: 44,
    paddingBottom: 16,
    paddingHorizontal: 24,
    backgroundColor: Colors.default.mainBase,
    position: 'absolute',
    top: 0
  },
  back: {
    marginRight: 24
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    fontSize: 22,
    color: Colors.default.textMain
  }
})
