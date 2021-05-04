import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {scheduleData} from '../../mock/DummyData';

const GameScreen = () => {

    useEffect(() => {
      console.log("Data are "+ scheduleData[0].home_team)
    })

    return (
      <View>
        <Text> Game Screen </Text>
      </View>
    );
}

export default GameScreen
