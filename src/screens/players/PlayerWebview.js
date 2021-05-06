import React from 'react'
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const PlayerWebview = ({ route, navigation }) => {

    const { name } = route.params

    return (
        <WebView source={{ uri: "https://www.google.com/search?q="+name}} />
    )
}
export default PlayerWebview