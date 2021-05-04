import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const ScheduleCard = () => {
   
  const [match, setMatch] = useState(null)

  useEffect(() => {
    match = props.match
  })

  return(
      <View style={{backgroundColor:"yellow"}}>
          <Text>{props.match.home_team}</Text>
          <Text>{props.match.away_team}</Text>
      </View>
  )
}

export default ScheduleCard
