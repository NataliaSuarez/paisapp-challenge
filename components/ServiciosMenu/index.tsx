import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import PagarIcon from '../icons/PagarIcon';
import RecargarIcon from '../icons/RecargarIcon';
import TransferIcon from '../icons/TransferIcon';
import WalletIcon from '../icons/WalletIcon';
import ServicioItem from './ServicioItem';
import NotResultsText from '../common/NotResultsText';

type ServicioComponent = {
  label: string;
  backgroundColor: string;
  Icon: any;
}

const servicios = [
  { label: "Billetera", backgroundColor: '#E4FFF0', Icon: WalletIcon },
  { label: "Transferir", backgroundColor: '#FEEAD4', Icon: TransferIcon },
  { label: "Pagar", backgroundColor: '#EEE3FF', Icon: PagarIcon },
  { label: "Recargar", backgroundColor: '#CAF0FF', Icon: RecargarIcon },
]

type ServiciosMenuProps = {
  search: string;
}

export default function ServiciosMenu({ search }: ServiciosMenuProps) {

  const filteredServ = useMemo(() => {
    return servicios.filter((s) => !search || s.label.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())) || [];
  }, [servicios, search])

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Servicios</Text>
      <View style={styles.servicesContainer}>
        {
          filteredServ.length > 0 ?
            filteredServ.map(({ label, backgroundColor, Icon }: ServicioComponent, i: number) => {
              return (
                <View style={{ marginRight: 29 }}>
                  <ServicioItem label={label} backgroundColor={backgroundColor} Icon={Icon} />
                </View>
              )
            })
            : <NotResultsText label="Servicios" />
        }
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
    justifyContent: 'flex-start',
    marginBottom: 32
  },
});
