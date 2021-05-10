
import React, { useEffect } from 'react'
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import { westernConference } from '../../mock/DummyData'

const WesternConference = () => {

    const render_club_position = item => {
        return (
            <TouchableOpacity 
                onPress={() => {
                    console.log("hihi");
                }}>
                <View style={Styles.block_club}>
                <Text style={Styles.number_club}>{item.position}</Text>
                <View style={Styles.club_container}>
                    <Image
                        style={Styles.logo_size}
                        source={require('../../assets/images/club_logo/nets_logo.png')} />
                    <Text>{item.club_name}</Text>
                </View>
                <Text style={Styles.title_text}>{item.win}</Text>
                <Text style={Styles.title_text}>{item.lose}</Text>
                <Text style={Styles.title_text}>{item.Pct}</Text>
                <Text style={Styles.title_text}>{item.l10}</Text>
                <Text style={Styles.title_text}>{item.strk}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.title_container}>
                <Text style={Styles.title_team}>Team</Text>
                <Text style={Styles.title_text}>W</Text>
                <Text style={Styles.title_text}>L</Text>
                <Text style={Styles.title_text}>Pct</Text>
                <Text style={Styles.title_text}>L10</Text>
                <Text style={Styles.title_text}>Strk</Text>
            </View>
            <FlatList
                data={westernConference}
                renderItem={ ({item}) => render_club_position(item)}
                keyExtractor={item => item.club_id}/>
        </View>
    )
}

export default WesternConference