import { StyleSheet } from 'react-native';
import dimens from '../../constants/Dimens'

export default StyleSheet.create({
    //match item
    match_container: {
        height: 120,
        margin: 4,
        borderWidth: 1,
        borderColor: "grey",
        flexDirection:'row',
        alignItems:'center'
    },
    club_container: {
        flex: 4,
        height: 90,
        justifyContent:'space-around',
        paddingLeft:20,
        flexDirection:'column'
    },
    score_container: {
        flex: 1,
        height: 90,
        justifyContent:'space-around',
        paddingLeft:20,
        flexDirection:'column'
    },
    club_name_container:{
       flexDirection:'row',
       width:"100%",
    },
    club_logo:{
        width:30,
        height:30,
        marginRight:15
    },
    match_text:{
        fontSize:dimens.medium_size,
    },
    time_container:{
        flex:2,
        height: "100%",
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderColor:"grey"
    }
})