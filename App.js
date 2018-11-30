import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import Routes from './Routes';
import MyStore from './src/MyStore';

export default class App extends Component{
  render() {
    return (
      <Provider store={MyStore}>
      <Routes/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('myapp', () => App);

