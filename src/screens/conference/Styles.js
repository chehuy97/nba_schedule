import { StyleSheet } from 'react-native';
import dimens from '../../constants/Dimens'

export default StyleSheet.create({
    container: { 
        backgroundColor: "white", 
        flex: 1 
    },
    title_container: {
        flexDirection:'row',
        height:30,
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'grey'
    },
    title_text:{
        flex:1,
    },
    title_team:{
        flex: 5, 
        marginLeft:10
    },
    number_club:{
        flex:1,
        marginLeft:10,
    },
    club_container:{
        flexDirection:'row',
        flex:4
    },
    logo_size:{
        width:23,
        height:23,
        marginRight:5
    },
    block_club: {
        flexDirection:'row',
        height:40,
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'grey'
    },
})