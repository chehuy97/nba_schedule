import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from "./StatStyles"
import { statsData } from '../../mock/DummyData'

const StatScreen = () => {

  const render_player_card = item => {
    return (
      <View style={styles.player_card}>
      <Text style={styles.text_stat}>{item.position}</Text>
      <View style={styles.player_info_card}>
        <Text style={styles.player_name}>{item.name}</Text>
        <View style={styles.team_container}>
          <Image
            source={require('../../assets/images/club_logo/rockets_logo.png')}
            style={styles.team_logo_img} />
          <Text>{item.team}</Text>
        </View>
      </View>
      <Text style={styles.text_stat}>{item.score}</Text>
    </View>
    )
  }

  const render_block_stats = item => {
    return (
      <View style={styles.block_container}>
      <Text style={styles.section_name}>{item.block_name}</Text>
      <View style={styles.title_stat}>
        <Text style={styles.text_stat}>Player</Text>
        <Text style={styles.text_stat}>{item.type}</Text>
      </View>
      <View>
      <FlatList 
        data={item.data}
        keyExtractor = {item => item.player_id}
        renderItem={ ({ item}) => render_player_card(item)}/>
        </View>   
    </View>
    )
  }

  return (
    <View>
      <FlatList 
        data={statsData}
        keyExtractor = {item => item.type}
        renderItem={ ({ item }) => render_block_stats(item)}/>        
    </View>
  );
}

export default StatScreen