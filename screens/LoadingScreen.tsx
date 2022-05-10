import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

interface LoadingScreenProps {
  stylesOverride?: object
  activityColor?: string
}

export default function LoadingScreen ({ stylesOverride = {}, activityColor = '#FAFAFA' }: LoadingScreenProps): React.ReactElement {
  return (
    <View style={[styles.container, stylesOverride]}>
      <ActivityIndicator size='large' color={activityColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#005CEE'
  }
})
