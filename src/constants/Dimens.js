import { Dimensions } from "react-native";

export default {
    //font size
    small_size: 12,
    normal_size:15,
    medium_size: 18,
    large_size: 25,

    //phone size
    phone_width: Dimensions.get('window').width,
    phone_height: Dimensions.get('window').height
}