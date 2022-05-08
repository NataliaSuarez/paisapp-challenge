import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView } from 'react-native';
import Card from './Card';
import { View } from '../../components/Themed';
import useUser from '../../hooks/useUser';
import LoadingCard from './LoadingCard';

export type Card = {
  id: number;
  number: string;
  balance: number;
  symbol: string;
  expDate: string;
}

export default function CardList() {
  const { data, isLoading } = useUser();

  const cards = useMemo(() => isLoading ? [] : data.cards, [isLoading, data])

  return (
    <View style={styles.cardsContainer}>
      <ScrollView horizontal style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
        {
          isLoading ?
            <LoadingCard />
            :
            cards.map((card: Card, i: number) => {
              return (
                <Card
                  key={card.id}
                  card={card}
                  userName={data.name}
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
