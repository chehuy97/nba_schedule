import { StyleSheet } from 'react-native';
import dimens from '../../constants/Dimens'
import colors from '../../constants/Color'

export default StyleSheet.create({
    block_container:{
        height: 300,
        backgroundColor:'white',
        paddingHorizontal: 15,
        margin:5,
        borderWidth: 0.5,
        borderColor:"grey",
        shadowColor: "#000000",
        flexDirection:'column'
    },
    section_name:{
        fontSize: dimens.normal_size,
        marginVertical:10
    },
    title_stat:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
    },
    player_card:{
        flexDirection: 'row',
        height:70,
        borderBottomWidth:0.5
    },
    player_info_card:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around'
    },
    team_container:{
        flexDirection:'row',
    },
    team_logo_img:{
        width:25,
        height:25
    },
    text_stat:{
        fontSize: dimens.normal_size,
        width:50,
        alignItems:'center'
    },
    player_name:{
        fontSize:dimens.normal_size
    }
    
})