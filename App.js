import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});
