import React, { useState, createContext, useReducer, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export const AuthContext = createContext({});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: any; }) => {
      switch (action.type) {
        case 'LOG_IN':
          return {
            ...prevState,
            isLogged: true,
          };
        case 'LOG_OUT':
          return {
            ...prevState,
            isLogged: false,
          };
      }
    },
    {
      isLoading: true,
      isLogged: false,
    }
  );

  const authContext = useMemo(
    () => ({
      logIn: (_: any) => {
        dispatch({ type: 'LOG_IN' })
      },
      logOut: () => {
        dispatch({ type: 'LOG_OUT' })
      },
    }),
    []
  );


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContext.Provider value={authContext}>
          <Navigation
            colorScheme={colorScheme}
            isLogged={state.isLogged}
          />
          <StatusBar />
        </AuthContext.Provider>
      </SafeAreaProvider>
    );
  }
}
