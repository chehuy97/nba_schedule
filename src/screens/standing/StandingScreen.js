import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { seasons, easternConference, westernConference } from '../../mock/DummyData';
import styles from './StandingStyles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Conference from '../conference/Conference';
import { NavigationContainer } from '@react-navigation/native';

const StandingScreen = () => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.season_container}>
        <Text style={styles.season_label}>Season</Text>
        <Text style={styles.season_picker}>2020-21</Text>
      </View>
      <View style={styles.table_container}>
        <Tab.Navigator>
          <Tab.Screen name="Eastern Conference" component={Conference} />
          <Tab.Screen name="Western conference" component={Conference} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

export default StandingScreen