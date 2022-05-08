import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import BackIcon from './icons/BackIcon';

type BackHeaderProps = {
  label: string;
}

export default function BackHeader({ label }: BackHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.back} onPress={() => navigation.goBack()}><BackIcon /></Text>
      <Text style={styles.title} onPress={() => navigation.goBack()}>{label}</Text>
    </View>
  );
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
    backgroundColor: "#F9FAFC",
    position: 'absolute',
    top: 0,
  },
  back: {
    marginRight: 24,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    fontSize: 22,
    color: "#334154",
  },
});
