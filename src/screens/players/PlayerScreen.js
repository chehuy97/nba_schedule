import React, { Component, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { players } from '../../mock/DummyData'
import styles from './PlayerStyles'

const PlayerScreen = () => {
  const renderPlayer = player => {
    return (
      <View style={styles.player_card_container}>
        <Image
          style={styles.player_card_image}
          source={require('../../assets/images/players/wood.png')} />
        <View style={styles.player_info_container}>
          <Text style={styles.player_name}>Chiristian Wood</Text>
          <Text>Power forward</Text>
          <View style={styles.player_team_container}>
            <Image
              style={styles.player_team_logo}
              source={require('../../assets/images/club_logo/rockets_logo.png')} />
              <Text>Rockets</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({ player }) => renderPlayer(player)}
        numColumns={3}
        keyExtractor={item => item.player_id} />
    </View>
  );
}

export default PlayerScreen