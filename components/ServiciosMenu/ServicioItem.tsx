import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

type ServicioItemProps = {
  label: string;
  backgroundColor: string;
  Icon: any;
}

export default function ServicioItem({ label, backgroundColor, Icon }: ServicioItemProps) {
  return (
    <View style={styles.actionBoxContainer}>
      <View style={[styles.actionBox, { backgroundColor: backgroundColor }]}>
        <Icon />
      </View>
      <Text style={styles.actionTitle}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  actionBoxContainer: {
    backgroundColor: "#F9FAFC",
    height: 108,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: "#616E7C",
  },
});