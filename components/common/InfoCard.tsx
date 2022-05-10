import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import ShadowDefault from './Shadow'

interface InfoCardProps {
  Icon: any
  title: string
  description: string
  optional?: string
  backgroundColor: string
  color: string
}

const paddingHorizontal = 24 * 2
const width = Dimensions.get('window').width - paddingHorizontal

export default function InfoCard ({ Icon, title, description, optional, backgroundColor, color }: InfoCardProps): React.ReactElement {
  return (
    <View style={{ marginBottom: 16 }}>
      <ShadowDefault size={[width, 92]}>
        <View style={styles.contactCard}>
          <View style={styles.leftData}>
            <View style={[styles.actionBox, { backgroundColor: backgroundColor }]}>
              <Icon />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
          {(optional != null)
            ? <Text style={[styles.optional, { color: color }]}>{optional}</Text>
            : null}
        </View>
      </ShadowDefault>
    </View>
  )
}

const styles = StyleSheet.create({
  contactCard: {
    backgroundColor: Colors.default.white,
    borderRadius: 16,
    height: 92,
    paddingVertical: 24,
    paddingRight: 18,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  leftData: {
    backgroundColor: Colors.default.white,
    flexDirection: 'row'
  },
  actionBox: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3E4FF',
    borderRadius: 12,
    marginRight: 16
  },
  info: {
    backgroundColor: Colors.default.white
  },
  title: {
    color: Colors.default.textSecondary,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4
  },
  description: {
    color: Colors.default.textBase,
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22
  },
  optional: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    alignSelf: 'center'
  }
})
