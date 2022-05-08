import { StyleSheet } from 'react-native';

import { ScrollView } from 'react-native';
import Card from './Card';
import { View } from '../../components/Themed';

const cards = [
  {
    "id": 1,
    "number": "1234 2345 2345 1234",
    "balance": 978.85,
    "symbol": "USD",
    "expDate": "02/30"
  },
  {
    "id": 2,
    "number": "1234 2345 2345 1235",
    "balance": 100,
    "symbol": "USD",
    "expDate": "02/24"
  },
  {
    "id": 3,
    "number": "1234 2345 2345 3322",
    "balance": 50,
    "symbol": "USD",
    "expDate": "02/24"
  }
]

export type Card = {
  id: number;
  number: string;
  balance: number;
  symbol: string;
  expDate: string;
}

export default function CardList() {
  return (
    <View style={styles.cardsContainer}>
      <ScrollView horizontal style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
        {
          cards.map((card, i) => {
            return (
              <Card
                key={card.id}
                card={card}
                styleOverride={
                  i === 0 ? { marginLeft: 24 } : cards.length - 1 === i ? { marginRight: 24 } : undefined
                }
              />
            )
          })
        }
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
    backgroundColor: "#F9FAFC",
    height: 190,
    marginVertical: 32,
  },
});
