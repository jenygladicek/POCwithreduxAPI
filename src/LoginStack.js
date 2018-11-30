import React from 'react';
import {Image,TouchableOpacity} from 'react-native';
import { createStackNavigator} from 'react-navigation';

import Home from './components/ImgComponent';
import Drawer from './DrawerNavigator';

const Routes = createStackNavigator({
   home : {screen : Home, navigationOptions: { header:null}},
   drawerStack : {screen : Drawer , navigationOptions:({navigation}) => ({
     header : null
  })}
},{
   initialRouteName: "home"
});
export default Routes;
