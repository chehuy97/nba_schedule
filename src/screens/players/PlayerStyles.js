import { StyleSheet } from 'react-native';
import dimens from '../../constants/Dimens'
import colors from '../../constants/Color'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.page_bg,
        paddingHorizontal: 7
    },
    player_card_container: {
        width: dimens.phone_width * 0.3,
        height: dimens.phone_height * 0.25,
        borderRadius: 7,
        borderWidth: 0.4,
        marginHorizontal: "1.5%",
        marginVertical: 7,
        flexDirection: 'column'
    },
    player_card_image: {
        height: dimens.phone_width * 0.25,
        width: dimens.phone_width * 0.3
    },
    player_info_container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'center'
    },
    player_name: {
        fontSize: dimens.normal_size
    },
    player_team_container: {
        flexDirection: 'row'
    },
    player_team_logo: {
        width: 25,
        height: 25,
        marginRight:3
    }


})