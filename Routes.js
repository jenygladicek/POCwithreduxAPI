import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginStack from './src/LoginStack';

const Routes = StackNavigator({
   loginStack : {screen : LoginStack}
},{
   initialRouteName: 'loginStack',
   headerMode: 'none',
   title: 'Main'
});
export default Routes;
