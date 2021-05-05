import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./StatStyles"

const StatScreen = () => {

  return (
    <View>
      <View style={styles.block_container}>
        <Text style={styles.section_name}>Points per game</Text>
        <View style={styles.title_stat}>
          <Text style={styles.text_stat}>Player</Text>
          <Text style={styles.text_stat}>PPG</Text>
        </View>
        <View style={styles.player_card}>
          <Text style={styles.text_stat}>1</Text>
          <View style={styles.player_info_card}>
            <Text style={styles.player_name}>Stephen Curry</Text>
            <View style={styles.team_container}>
              <Image
                source={require('../../assets/images/club_logo/rockets_logo.png')}
                style={styles.team_logo_img} />
              <Text>Warriors</Text>
            </View>
          </View>
          <Text style={styles.text_stat}>31.5</Text>
        </View>
      </View>
    </View>
  );
}

export default StatScreen