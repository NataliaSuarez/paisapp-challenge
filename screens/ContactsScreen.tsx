import { StyleSheet, ScrollView, StatusBar, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'

import BackHeader from '../components/BackHeader'
import ContactsList from '../components/ContactsList'
import SearchContacts from '../components/SearchContacts'
import useContacts from '../hooks/useContacts'
import LoadingContactsList from '../components/ContactsList/LoadingContactLists'
import { View } from '../components/Themed'
import { Contact } from '../types'

const width = Dimensions.get('window').width

const recent = (a: Contact, b: Contact): number => {
  if (new Date(a.contacted) > new Date(b.contacted)) return -1
  if (new Date(a.contacted) < new Date(b.contacted)) return 1
  return 0
}

export default function ContactsScreen (): React.ReactElement {
  const { data, isLoading } = useContacts()
  const [search, setSearch] = useState('')

  const all = useMemo(() => {
    if (isLoading) return []
    return data.filter(
      (contact: Contact): boolean =>
        !search ||
        `${contact.name} ${contact.lastName}`.toLowerCase().includes(search.toLowerCase().trim()) ||
        contact.phone.includes(search.trim())
    )
  }, [isLoading, data, search])
  const recents = useMemo(() => {
    if (isLoading) return []
    const [latest, penultimate] = [...data].sort(recent)
    return [latest, penultimate]
  }, [isLoading, data, recent])

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <BackHeader label='Contactos' />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <SearchContacts search={search} setSearch={setSearch} />
        {
          isLoading
            ? <>
              <LoadingContactsList />
              <LoadingContactsList />
            </>
            : (<>
              {search.length > 0 ? null : <ContactsList contacts={recents} label='Recents' />}
              <ContactsList contacts={all} label='All' />
            </>)
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'flex-start',
    backgroundColor: '#F9FAFC'
  },
  backContainer: {
    marginTop: 34,
    zIndex: 100
  },
  scrollContainer: {
    width: width,
    flex: 1
  }
})
