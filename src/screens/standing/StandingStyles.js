import { StyleSheet } from 'react-native';
import dimens from '../../constants/Dimens'
import colors from '../../constants/Color'

export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: colors.page_bg
    },
    season_container: {
        width: 90,
        height: 60,
        alignItems:'center',
        justifyContent:'center'

    },
    season_label: {
        fontSize: dimens.normal_size,
        color:"grey"
    },
    season_picker: {
        color: '#1E90FF',
        fontWeight:'bold'
    },
    table_container: {
        flex:1,
        backgroundColor:'white'
    }
})