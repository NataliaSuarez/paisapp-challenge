import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import PagarIcon from '../icons/PagarIcon';
import RecargarIcon from '../icons/RecargarIcon';
import TransferIcon from '../icons/TransferIcon';
import WalletIcon from '../icons/WalletIcon';
import ServicioItem from './ServicioItem';

export default function ServiciosMenu() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Servicios</Text>
      <View style={styles.servicesContainer}>
        <ServicioItem label="Billetera" backgroundColor='#E4FFF0' Icon={WalletIcon} />
        <ServicioItem label="Transferir" backgroundColor='#FEEAD4' Icon={TransferIcon} />
        <ServicioItem label="Pagar" backgroundColor='#EEE3FF' Icon={PagarIcon} />
        <ServicioItem label="Recargar" backgroundColor='#CAF0FF' Icon={RecargarIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#F9FAFC",
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    color: "#334154",
    marginBottom: 24,
  },
  servicesContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: "#F9FAFC",
    justifyContent: 'space-between',
    marginBottom: 32
  },
});
