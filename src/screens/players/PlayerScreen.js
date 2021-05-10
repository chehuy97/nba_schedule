import React, { Component, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { players, nets_players } from '../../mock/DummyData'
import styles from './PlayerStyles'
import { WebView } from 'react-native-webview'
import { useSelector } from 'react-redux';
import { chooseTeam } from '../../actions/TeamActions'

const PlayerScreen = ({ navigation }) => {

  const team = useSelector(state => state)
  // const dispatch = useDispatch()
  // const chooseTeam = team => dispatch(chooseTeam(team))
  const [data, setData] = useState(null)

  useEffect(() => {
    console.log("Team in player is " + team.club_name);
    setData(show_team_player())
    console.log(data);
  })

  const show_webview_player = name => {
    console.log("click webview");
    navigation.navigate('PlayerWebView',{name: name})
  }

  const show_team_player = () => {
    console.log("Show player");
    switch(team.club_name) {
      case "Nets":
        return nets_players
      default:
        return players  

    }
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
        data={data}
        renderItem={({ item }) => renderPlayer(item)}
        numColumns={3}
        keyExtractor={item => item.player_id} />
    </View>
  );
}

export default PlayerScreen