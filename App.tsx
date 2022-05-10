import React, { createContext, useReducer, useMemo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from 'react-query'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'
import LoadingScreen from './screens/LoadingScreen'

export const AuthContext = createContext({})
const queryClient = new QueryClient()

export default function App(): React.ReactElement {
  const isLoadingComplete = useCachedResources()

  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: any }) => {
      switch (action.type) {
        case 'LOG_IN':
          return {
            ...prevState,
            isLogged: true
          }
        case 'LOG_OUT':
          return {
            ...prevState,
            isLogged: false
          }
      }
    },
    {
      isLoading: true,
      isLogged: false
    }
  )

  const authContext = useMemo(
    () => ({
      logIn: (_: any) => {
        dispatch({ type: 'LOG_IN' })
      },
      logOut: () => {
        dispatch({ type: 'LOG_OUT' })
      }
    }),
    []
  )

  if (!isLoadingComplete) {
    return (<LoadingScreen />)
  }
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <QueryClientProvider client={queryClient}>
          <Navigation
            isLogged={state.isLogged}
          />
          <StatusBar />
        </QueryClientProvider>
      </AuthContext.Provider>
    </SafeAreaProvider>
  )
};
