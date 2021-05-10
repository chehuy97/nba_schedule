import { combineReducers } from "redux";
import Color from "../constants/Color";

const INITIAL_STATE = {
    app_color: club_theme_color("none"),
    club_name: 'none'
}

function  club_theme_color(clubName){
    switch(clubName){
        case 'Nets' :
            return '#000000'
        default:
            return Color.app_bar    
    }
} 

const teamReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHOOSE_TEAM":
            return {
                app_color: club_theme_color(action.payload.club_name),
                club_name: action.payload.club_name
            }
        default:
            return state    
    }
}

export default teamReducer