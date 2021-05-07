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
import { Image, View, Text } from 'react-native';
import { createStore } from 'redux'
import teamReducer from './src/reducers/TeamReducer'
import { Provider } from 'react-redux';

const Stack = createStackNavigator();
const store = createStore(teamReducer)

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'white',
    },
  };

  const app_icon = () => {
    return (
      <View style={{ alignItems: 'flex-end', width: 60 }}>
        <Image source={require('./src/assets/images/nba_logo.png')} style={{ width: 20, height: 33 }} />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: color.app_bar },
            headerLeft: () => app_icon(),
          }}>
          <Stack.Screen
            style={{ backgroundColor: 'green' }}
            name="NBA"
            component={Route} />
          <Stack.Screen name="PlayerWebView" component={PlayerWebView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}