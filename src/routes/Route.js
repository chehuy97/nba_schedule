import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from '../screens/games/GameScreen'
import StandingScreen from '../screens/standing/StandingScreen'
import StatScreen from '../screens/stats/StatScreen';
import PlayerScreen from '../screens/players/PlayerScreen';
import PlayerWebview from '../screens/players/PlayerWebview'
import color from '../constants/Color'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Route = navigation => {

    const playerNavigation = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Player" component={PlayerScreen} />
                <Stack.Screen name="PlayerWebview" component={PlayerWebview}/>
            </Stack.Navigator>
        )
    }

    return (
        // <NavigationContainer>
            <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor: color.inative_tab,
                activeTintColor:"white",
                style: { backgroundColor: color.app_bar },}}>
                <Tab.Screen name="Games" component={GameScreen} />
                <Tab.Screen name="Standing" component={StandingScreen} />
                <Tab.Screen name="Stats" component={StatScreen} />
                <Tab.Screen name="Players" component={PlayerScreen} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default Route