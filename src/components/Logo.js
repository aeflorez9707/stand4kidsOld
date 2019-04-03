import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import logo from '../imagenes/mati.png'
export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Image source={logo} style={styles.logo} />
       <Text style={styles.logoText}>Stand4kids</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logoText:  {
    color: "#000000",
    fontWeight: '500',
    marginVertical: 15,
    fontSize: 20,
    paddingLeft:34
  },

  logo:  {

    width:180,
    height:120,
  }

  });
