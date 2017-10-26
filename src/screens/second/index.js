import React from 'react';
import {View, Text} from 'react-native'

export class Second extends React.Component {
  render () {
    return (
      <View style={{backgroundColor: 'blue', height: '100%', width: '100%'}}>
          <View>
            <Text style={{color: 'white'}}>SECOND</Text>
            <Text style={{color: 'white'}}>THIS IS THE SECOND SCREEN</Text>
          </View>
      </View>
    )
  }
}

export default Second