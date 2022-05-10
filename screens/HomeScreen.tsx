import { StyleSheet, ScrollView, StatusBar, View } from 'react-native'
import { useState } from 'react'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'
import LoadingScreen from './LoadingScreen'
import CardList from '../components/CardList'
import StatusHeader from '../components/StatusHeader'
import ServiciosMenu from '../components/ServiciosMenu'
import TransactionsList from '../components/TransactionsList'
import Colors from '../constants/Colors'

export default function HomeScreen(): React.ReactElement {
  const [editing, setEditing] = useState(false)
  const [search, setSearch] = useState('')

  const [fontLoaded, err] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontLoaded) {
    return (
      <LoadingScreen stylesOverride={{ backgroundColor: Colors.default.mainBase }} activityColor={Colors.default.primary} />
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
        <StatusHeader
          editing={editing}
          setEditing={setEditing}
          search={search}
          setSearch={setSearch}
        />
        {!editing
          ? <CardList />
          : <View style={{ marginTop: 32 }} />}
        <ServiciosMenu search={search} />
        <TransactionsList search={search} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'flex-start',
    backgroundColor: Colors.default.mainBase
  },
  scrollContainer: {
    width: '100%',
    flex: 1
  },
  sectionContainer: {
    backgroundColor: Colors.default.mainBase,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    color: Colors.default.textMain,
    marginBottom: 24
  }
})
