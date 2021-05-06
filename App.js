/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import Route from './src/routes/Route';
import PlayerWebView from './src/screens/players/PlayerWebview'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import color from './src/constants/Color'

const Stack = createStackNavigator();

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'white',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: color.app_bar }
        }}>
        <Stack.Screen
          name="NBA"
          component={Route} />
        <Stack.Screen name="PlayerWebView" component={PlayerWebView}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}