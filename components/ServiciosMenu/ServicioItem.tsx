import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import ShadowDefault from '../common/Shadow'

interface ServicioItemProps {
  label: string
  backgroundColor: string
  Icon: any
}

export default function ServicioItem ({ label, backgroundColor, Icon }: ServicioItemProps): React.ReactElement {
  return (
    <View style={styles.actionBoxContainer}>
      <ShadowDefault size={[70, 70]}>
        <View style={[styles.actionBox, { backgroundColor: backgroundColor }]}>
          <Icon />
        </View>
      </ShadowDefault>
      <Text style={styles.actionTitle}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  actionBoxContainer: {
    backgroundColor: Colors.default.mainBase,
    height: 108,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionBox: {
    width: 70,
    height: 70,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'

  },
  actionTitle: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.default.textSecondary
  }
})
