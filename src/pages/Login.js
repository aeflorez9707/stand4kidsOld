import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar, TextInput,TouchableHighlight,
    Animated, ScrollView, Dimensions,ImageBackground, Image, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'
import {Actions} from 'react-native-router-flux'
export default class Login extends React.Component {
  crear(){
    Actions.crear();
  }
  signup(){
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
       <Logo/>
       <Form type="Iniciar sesión"/>
       <View style={styles.signupTextCont}>
       <Text>¿Aún no tienes cuenta?</Text>
       <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Regístrate</Text>
       </TouchableOpacity>
       </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  btnLogin: {
      width: 300,
      height: 45,
      borderRadius: 25,
      backgroundColor:'#fb8c00' ,
      justifyContent:'center' ,
      textAlign:'center' ,
      marginTop:-20

    },

  signupButton: {
    color: "black",
    fontSize: 17,
    textAlign:'center',
    fontWeight:'bold',
    fontWeight:'500'

  }
});
