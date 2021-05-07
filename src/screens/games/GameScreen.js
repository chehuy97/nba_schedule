import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { scheduleData } from '../../mock/DummyData';
import ScheduleItem from '../../components/ScheduleCard/ScheduleItem'
import styles from './GameStyles'

const GameScreen = () => {
  return (
    <FlatList
      data={scheduleData}
      renderItem={({ item }) => <ScheduleItem data={item} /> }
      keyExtractor={item => item.match_id} />
  );
}

export default GameScreen
