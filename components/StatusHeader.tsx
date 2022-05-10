import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Colors from '../constants/Colors'
import useUser from '../hooks/useUser'
import TextField from './common/TextField'
import NotificationIcon from './icons/NotificationIcon'
import SearchIcon from './icons/SearchIcon'

interface StatusHeaderProps {
  editing: boolean
  search: string
  setEditing: any
  setSearch: any
}

export default function StatusHeader ({ editing, setEditing, search, setSearch }: StatusHeaderProps): React.ReactElement {
  const { data, isLoading } = useUser()
  return (
    <View style={styles.header}>
      {editing ?
        <TouchableWithoutFeedback onPress={() => setEditing(false)}>
          <TextField
            label=''
            value={search}
            placeholder='Buscar Servicios o Transacciones'
            onChangeText={setSearch}
            stylesOverride={{ borderRadius: '16' }}
            autoFocus
            onEndEditing={() => {
              setEditing(false)
              setSearch('')
            }}
          />
        </TouchableWithoutFeedback>
        : (<>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Hola</Text>
            <Text style={styles.username}>{isLoading ? ' ' : data.name}</Text>
          </View>
          <View style={styles.actionsContainer}>
            <SearchIcon
              color='#200E32' handleClick={() => setEditing(true)}
            />
            <NotificationIcon />
          </View>
          </>)}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 53,
    marginTop: 34,
    paddingHorizontal: 24,
    backgroundColor: Colors.default.mainBase,
    transition: '5s'
  },
  welcomeContainer: {
    backgroundColor: Colors.default.mainBase
  },
  welcomeText: {
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 30,
    color: Colors.default.textSecondary
  },
  username: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    fontSize: 22,
    color: Colors.default.textMain
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 57.15,
    justifyContent: 'space-between'
  }
})
