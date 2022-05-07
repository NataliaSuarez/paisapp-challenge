import { StyleSheet } from 'react-native';

import { ScrollView } from 'react-native';
import Card from './Card';
import { View } from '../../components/Themed';

export default function CardList() {
  return (
    <View style={styles.cardsContainer}>
      <ScrollView horizontal style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
        <Card styleOverride={{ marginLeft: 24 }} />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    flex: 1,
  },
  cardsContainer: {
    width: '100%',
    // paddingLeft: 24,
    backgroundColor: "#F9FAFC",
    height: 190,
    marginVertical: 32,
  },
});
