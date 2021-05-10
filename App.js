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
import RootReducer from './src/reducers/RootReducer';
 
 const Stack = createStackNavigator();
 const store = createStore(RootReducer)
 
 export default function App() {
 
   return (
     <Provider store={store}>
       <Route/>
     </Provider>
   );
 }