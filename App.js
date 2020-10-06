import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SCREEN_NAME } from './src/configs'
import {
  AfsarScreen, HomeScreen, LoginScreen, MusicScreen, SleepScreen, MyTabBar,
} from './src/screens'
import SigupAndSigIn from './src/screens/auth/SigupAndSigIn'
import MeditateScreen from './src/screens/main/MusicScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name={SCREEN_NAME.HomeScreen} component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name={SCREEN_NAME.SleepScreen} component={SleepScreen} options={{ title: 'Sleep' }} />
      <Tab.Screen name={SCREEN_NAME.MeditateScreen} component={MeditateScreen} options={{ title: 'Meditate' }} />
      <Tab.Screen name={SCREEN_NAME.MusicScreen} component={MusicScreen} options={{ title: 'Music' }} />
      <Tab.Screen name={SCREEN_NAME.AfsarScreen} component={AfsarScreen} options={{ title: 'Afsar' }} />
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name={SCREEN_NAME.SigupAndSigIn} component={SigupAndSigIn} />
        <Stack.Screen name={SCREEN_NAME.MainTab} component={MainTabs} />
        <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
