import React from 'react';
import Expo from 'expo'
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { WebBrowser } from 'expo'
import { DrawerItems, NavigationActions } from 'react-navigation';

export class DrawerComponent extends React.Component {

  render() {
    return(
      <View>
        <View>
          <View>
            <Text>Hello User</Text>
            <Text>Welcome</Text>
          </View>
        </View>
        <DrawerItems {...this.props} activeTintColor='#4c8526' inactiveTintColor='rgba(0, 0, 0, 0.87)'/>
      </View>
    );
  }
}


export default DrawerComponent