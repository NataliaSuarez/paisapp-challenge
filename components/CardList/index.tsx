import React, { useMemo } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import Card from './Card'
import useUser from '../../hooks/useUser'
import LoadingCard from './LoadingCard'
import { Card as CardType } from '../../types'
import Colors from '../../constants/Colors'

export default function CardList(): React.ReactElement {
  const { data, isLoading } = useUser()

  const cards = useMemo(() => isLoading ? [] : data.cards, [isLoading, data])

  return (
    <View style={styles.cardsContainer}>
      <ScrollView horizontal style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
        {
          isLoading
            ? <LoadingCard />
            : cards.map((card: CardType, i: number) => {
              return (
                <Card
                  key={`${card.id}-${i}`}
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
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    flex: 1
  },
  cardsContainer: {
    width: '100%',
    backgroundColor: Colors.default.mainBase,
    height: 190,
    marginVertical: 32
  }
})
