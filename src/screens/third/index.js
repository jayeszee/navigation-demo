import React from 'react';
import {View, Text} from 'react-native'

export class Third extends React.Component {
  render () {
    return (
      <View style={{backgroundColor: 'red', height: '100%', width: '100%'}}>
        <View>
          <Text style={{color: 'white'}}>Third Screen</Text>
          <Text style={{color: 'white'}}>THIS IS THE THIRD SCREEN</Text>
        </View>
      </View>
    )
  }
}

export default Third