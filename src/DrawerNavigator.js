import React from 'react';
import {Image,TouchableOpacity,Text} from 'react-native';
import { createDrawerNavigator ,DrawerItems,createStackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";
import {Container,Content,Header,Body,List} from 'native-base';

import Dashboard from './components/Dashboard';
import Profile from './components/AddProfile';
import SignOut from './components/AlertBox';

const CustomDrawerContentComponent=(props)=>(
    <Container>
      <Header style={{height:150,backgroundColor:'#616161'}}>
        <Body>
           <Image source={require('./images/logo.jpg')} />
           <Text style={{color : 'white', fontSize: 20}}>User Name</Text>
        </Body>
      </Header>
      <Content>
       <List>
        <DrawerItems {...props} activeBackgroundColor='rgba(0, 0, 0, .04)'/>
       </List>
      </Content>
    </Container>
  )

  const ProfileStack = createStackNavigator(
    {
      Profile: {
        screen: Profile,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(null);navigation.openDrawer() }}/></TouchableOpacity>,
        headerStyle: {
          backgroundColor: "#212121"
          },
          headerTitle : 'Add Profile',
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }),
    }
  );
  const DashStack = createStackNavigator(
    {
      Dashboard: {
        screen: Dashboard,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
      headerLeft:<TouchableOpacity onPress={() => navigation.openDrawer()}><Icon name="bars" style={{color:'white',marginLeft:20}} size={20}/></TouchableOpacity>,
      headerStyle: {
      backgroundColor: "#212121"
      },
      headerTitle : 'Welcome',
      headerTintColor: "#fff",
      headerTitleStyle: {
      fontWeight: "bold"
      }
      }),
    }
  );

  const SignOutStack = createStackNavigator(
    {
      SignOut: {
        screen: SignOut,
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft:<TouchableOpacity><Icon name="arrow-left" style={{color:'white',marginLeft:20}} size={20} onPress={() => { navigation.goBack(null);navigation.openDrawer() }}/></TouchableOpacity>,
        headerStyle: {
          backgroundColor: "#212121"
          },
          headerTitle : 'SignOut',
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }),
    }
  );

  const MyDrawerNavigator = createDrawerNavigator({
     dashboard: {
        screen: DashStack,
        navigationOptions: {
        drawerLabel: 'Dashboard',
        drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} color={tintColor}/>
        }
     },
    profile: {
        screen: ProfileStack,
        navigationOptions: {
        drawerLabel: 'Add Profile',
        drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} color={tintColor}/>
        }
     },
     signOut: {
        screen: SignOutStack,
          navigationOptions: {
            drawerLabel: 'Sign Out',
            drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} color={tintColor}/>,
          }
    },
    },{
    initialRouteName:'dashboard',
    drawerPosition:'left',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    drawerWidth : 250
  });

  export default MyDrawerNavigator;