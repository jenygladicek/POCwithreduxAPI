import React, {Component} from 'react';
import {Alert,Text} from 'react-native';

export default class AlertBox extends Component{
    constructor(props) {
        super(props);
      }
  render() {
      let alert = Alert.alert('Confirm','Do you really want to Sign Out or remain within the application?',[{text: "Yes", onPress: () =>this.props.navigation.navigate('home')},{text: "No", onPress: () =>{this.props.navigation.navigate('dashboard');this.props.navigation.openDrawer()}}]); 
    return (
       <Text> {alert}</Text>
    );
  }
}



