import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Styles from './Styles'
import { easternConference } from '../../mock/DummyData'

const Conference = () => {

    const render_club_position = item => {
        console.log(item.name);
        return (
            <View style={Styles.block_club}>
                <Text style={Styles.number_club}>{item.position}</Text>
                <View style={Styles.club_container}>
                    <Image
                        style={Styles.logo_size}
                        source={require('../../assets/images/club_logo/rockets_logo.png')} />
                    <Text>{item.club_name}</Text>
                </View>
                <Text style={Styles.title_text}>{item.win}</Text>
                <Text style={Styles.title_text}>{item.lose}</Text>
                <Text style={Styles.title_text}>{item.Pct}</Text>
                <Text style={Styles.title_text}>{item.l10}</Text>
                <Text style={Styles.title_text}>{item.strk}</Text>
            </View>
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
                data={easternConference}
                renderItem={ ({item}) => render_club_position(item)}
                keyExtractor={item => item.club_id}/>
        </View>
    )
}

export default Conference