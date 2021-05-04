import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GameScreen from '../components/games/GameScreen'
import StandingScreen from '../components/standing/StandingScreen'
import StatScreen from '../components/stats/StatScreen';
import PlayerScreen from '../components/players/PlayerScreen';
import color from '../constants/Color'

const Tab = createMaterialTopTabNavigator();

const Route = navigation => {
    return (
        // <NavigationContainer>
            <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor: color.inative_tab,
                activeTintColor:"white",
                style: { backgroundColor: color.app_bar },}}>
                <Tab.Screen name="Game" component={GameScreen} />
                <Tab.Screen name="Standing" component={StandingScreen} />
                <Tab.Screen name="Stat" component={StatScreen} />
                <Tab.Screen name="Player" component={PlayerScreen} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default Route