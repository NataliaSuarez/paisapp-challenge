import React from 'react'
import { StyleSheet, TextInput, Dimensions } from 'react-native'

import SearchIcon from './icons/SearchIcon'
import { View } from '../components/Themed'
import ShadowDefault from './common/Shadow'

interface SearchContactsProps {
  search: string
  setSearch: any
}

const paddingHorizontal = 24 * 2
const width = Dimensions.get('window').width - paddingHorizontal

export default function SearchContacts ({ search, setSearch }: SearchContactsProps): React.ReactElement {
  return (
    <View style={{
      marginTop: 46,
      marginBottom: 30,
      width: '100%'
    }}
    >
      <ShadowDefault size={[width, 60]}>
        <View style={styles.container}>
          <View style={styles.search}><SearchIcon color='#AAAAAA' /></View>
          <TextInput
            style={styles.input}
            placeholder='Ingresa un nombre o un número'
            onChangeText={setSearch}
            selectionColor='#AAAAAA'
            placeholderTextColor='#AAAAAA'
            value={search}
          />
        </View>
      </ShadowDefault>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 21,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16
  },
  search: {
    marginRight: 19.71
  },
  input: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 12,
    color: '#334154',
    width: '100%'
  }
})
