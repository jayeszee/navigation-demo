import React from 'react';
import {View, Text} from 'react-native'

export class Home extends React.Component {
  render () {
    return (
      <View style={{backgroundColor: 'black', height: '100%', width: '100%'}}>
          <View>
            <Text style={{color: 'white'}}>HOME</Text>
            <Text style={{color: 'white'}}>THIS IS THE HOME SCREEN</Text>
          </View>
      </View>
    )
  }
}
export default Home