import React, { Component, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { players } from '../../mock/DummyData'
import styles from './PlayerStyles'
import { WebView } from 'react-native-webview'

const PlayerScreen = ({ navigation }) => {

  useEffect(() => {
    console.log("Screen 2")
  });

  const show_webview_player = name => {
    console.log("click webview");
    navigation.navigate('PlayerWebView',{name: name})
  }

  const renderPlayer = item => {
    return (
      <TouchableOpacity
        onPress={() => show_webview_player(item.name)}>
        <View style={styles.player_card_container}>
          <Image
            style={styles.player_card_image}
            source={require('../../assets/images/players/wood.png')} />
          <View style={styles.player_info_container}>
            <Text style={styles.player_name}>{item.name}</Text>
            <Text>{item.position}</Text>
            <View style={styles.player_team_container}>
              <Image
                style={styles.player_team_logo}
                source={require('../../assets/images/club_logo/rockets_logo.png')} />
              <Text>{item.team}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({ item }) => renderPlayer(item)}
        numColumns={3}
        keyExtractor={item => item.player_id} />
    </View>
  );
}

export default PlayerScreen