import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ScheduleItemStyles'

const ScheduleCard = ({ data }) => {

  return (
    <TouchableOpacity
      onPress={() => { console.log("touch match") }}>
      <View style={styles.match_container}>
        <View style={styles.club_container}>
          <View style={styles.club_name_container}>
            <Image source={{ uri: data.image_home }} style={styles.club_logo} />
            <Text style={styles.match_text}>{data.home_team}</Text>
          </View>
          <View style={styles.club_name_container}>
            <Image source={{ uri: data.image_away }} style={styles.club_logo} />
            <Text style={styles.match_text}>{data.away_team}</Text>
          </View>
        </View>
        <View style={styles.score_container}>
          <Text style={styles.match_text}>{data.home_score}</Text>
          <Text style={styles.match_text}>{data.away_score}</Text>
        </View>
        <View style={styles.time_container}>
          <Text>{data.status}</Text>
          <Text>{data.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ScheduleCard
