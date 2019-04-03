import React, {Component} from 'react';
import { StyleSheet, View,StatusBar} from 'react-native';
import Routes from   './src/Routes'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Routes/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
