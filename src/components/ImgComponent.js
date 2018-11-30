import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

class ImgComponent extends Component{
  constructor(props){
    super(props);
  } 
  /**to navigate to Dashboard */
  onPressGo =() =>{
    const navigator = this.props.navigation;
    navigator.navigate('dashboard');
  };
  
  render() {
    return (
      <View style={styles.conntainer}>
        <Icon name="users" size={60} onPress={this.onPressGo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conntainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#FFFFFF'
  }
});

export default ImgComponent;
