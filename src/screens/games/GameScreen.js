import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { scheduleData } from '../../mock/DummyData';
import ScheduleItem from '../../components/ScheduleCard/ScheduleItem'
import styles from './GameStyles'

const GameScreen = () => {

  const renderMatchItem = item => {
    return (
      <TouchableOpacity
      onPress={() => {console.log("touch match")}}>
        <View style={styles.match_container}>
        <View style={styles.club_container}>
          <View style={styles.club_name_container}>
            <Image source={require('../../assets/images/club_logo/rockets_logo.png')} style={styles.club_logo} />
            <Text style={styles.match_text}>{item.home_team}</Text>
          </View>
          <View style={styles.club_name_container}>
            <Image source={require('../../assets/images/club_logo/nets_logo.png')} style={styles.club_logo} />
            <Text style={styles.match_text}>{item.away_team}</Text>
          </View>
        </View>
        <View style={styles.score_container}>
            <Text style={styles.match_text}>{item.home_score}</Text>
            <Text style={styles.match_text}>{item.away_score}</Text>
          </View>
        <View style={styles.time_container}>
          <Text>{item.status}</Text>
          <Text>{item.time}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={scheduleData}
      renderItem={({ item }) => renderMatchItem(item)}
      keyExtractor={item => item.match_id} />
  );
}

export default GameScreen