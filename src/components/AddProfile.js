import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

class ImgComponent extends Component{
  constructor(props){
    super(props);
  } 
  onPressGo =() =>{
    const navigator = this.props.navigation;
    navigator.navigate('dashboard');
  };
  render() {
    return (
      <View style={styles.conntainer}>
        <Text>Add a new profile</Text>
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
