import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GameScreen from '../screens/games/GameScreen'
import StandingScreen from '../screens/standing/StandingScreen'
import StatScreen from '../screens/stats/StatScreen';
import PlayerScreen from '../screens/players/PlayerScreen';
import color from '../constants/Color'
import { useSelector } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const TopTabRoute = () => {

    const team = useSelector(state => state)

    return (
        <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor: color.inative_tab,
                activeTintColor: "white",
                style: { backgroundColor: team.app_color },
            }}>
            <Tab.Screen name="Games" component={GameScreen} />
            <Tab.Screen name="Standing" component={StandingScreen} />
            <Tab.Screen name="Stats" component={StatScreen} />
            <Tab.Screen name="Players" component={PlayerScreen} />
        </Tab.Navigator>
    )
}

export default TopTabRoute