/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ColorSchemeName, View } from 'react-native'

import HomeLogo from '../components/icons/HomeLogo'
import ContactsLogo from '../components/icons/ContactsLogo'
import LogoutLogo from '../components/icons/LogoutLogo'
import ModalScreen from '../screens/ModalScreen'
import RegisterScreen from '../screens/RegisterScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import HomeScreen from '../screens/HomeScreen'
import ContactsScreen from '../screens/ContactsScreen'
import LogoutScreen from '../screens/LogoutScreen'
import LoginScreen from '../screens/LoginScreen'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types'
import LinkingConfiguration from './LinkingConfiguration'

interface NavigationProps {
  colorScheme: ColorSchemeName
  isLogged: boolean
}

export default function Navigation ({ colorScheme, isLogged }: NavigationProps): React.ReactElement {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {isLogged
        ? <RootNavigator />
        : <OnBoardingNavigator />}
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function OnBoardingNavigator (): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

function RootNavigator (): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator (): React.ReactElement {
  return (
    <View style={{ flex: 1, backgroundColor: '#F9FAFC' }}>
      <BottomTab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#6C8FF8', // Colors[colorScheme].tint,
          tabBarInactiveTintColor: '#071529', // Colors[colorScheme].tint,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 86,
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            borderTopColor: 'transparent'
          }
        }}
      >
        <BottomTab.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation }: RootTabScreenProps<'Home'>) => ({
            title: 'Home piola',
            tabBarIcon: ({ color }) => <HomeLogo color={color} />
          })}
        />
        <BottomTab.Screen
          name='Contacts'
          component={ContactsScreen}
          options={{
            title: 'Contacts',
            tabBarIcon: ({ color }) => <ContactsLogo color={color} />
          }}
        />
        <BottomTab.Screen
          name='Logout'
          component={LogoutScreen}
          options={{
            title: 'Logout',
            tabBarStyle: { display: 'none' },
            tabBarIcon: ({ color }) => <LogoutLogo color={color} />
          }}
        />
      </BottomTab.Navigator>
    </View>
  )
}
