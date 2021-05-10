import React, { Component, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlayerWebview from '../screens/players/PlayerWebview'
import color from '../constants/Color'
import { View, Image } from 'react-native'
import TopTabRoute from './TopTabRoutes'
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Route = navigation => {

    const team = useSelector(state => state.TeamReducer)

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
                <Image source={require('../assets/images/nba_logo.png')} style={{ width: 20, height: 33 }} />
            </View>
        )
    }

    return (
        <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: team.app_color },
            headerLeft: () => app_icon(),
          }}>
          <Stack.Screen
            style={{ backgroundColor: 'green' }}
            name="NBA"
            component={TopTabRoute} />
          <Stack.Screen name="PlayerWebView" component={PlayerWebview} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Route