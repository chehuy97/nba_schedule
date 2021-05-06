import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { seasons} from '../../mock/DummyData';
import styles from './StandingStyles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EasternConference from '../conference/EasternConference';
import WesternConference from '../conference/WesternConference'

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
          <Tab.Screen name="Eastern Conference" component={EasternConference} />
          <Tab.Screen name="Western conference" component={WesternConference} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

export default StandingScreen