import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GameScreen from '../components/games/GameScreen'
import StandingScreen from '../components/standing/StandingScreen'
import StatScreen from '../components/stats/StatScreen';
import PlayerScreen from '../components/players/PlayerScreen';

const Tab = createMaterialTopTabNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Game" component={GameScreen}/>
        <Tab.Screen name="Standing" component={StandingScreen} />
        <Tab.Screen name="Stat" component={StatScreen}/>
        <Tab.Screen name="Player" component={PlayerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}