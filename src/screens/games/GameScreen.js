import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { scheduleData, nets_match } from '../../mock/DummyData';
import ScheduleItem from '../../components/ScheduleCard/ScheduleItem'
import styles from './GameStyles'
import { useSelector } from 'react-redux';

const GameScreen = () => {

  const team = useSelector(state => state.TeamReducer)
  const [data, setData] = useState(null)

  useEffect(() => {
    show_team_match()
  })

  const show_team_match = () => {
    switch(team.club_name){
      case 'Nets':
        setData(nets_match)
        break
      default:
        setData(scheduleData)  
    }
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ScheduleItem data={item} /> }
      keyExtractor={item => item.match_id} />
  );
}

export default GameScreen
