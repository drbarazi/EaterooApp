import Foods from './Foods';
import Create from './Create';
import Edit from './Edit';

import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const NavStack = createStackNavigator({
  Foods: {
    screen: Foods,
        navigationOptions:() => ({
            headerTitle:"Foods"
        })
  },
  Edit: {
    screen: Edit,
        navigationOptions:() => ({
            headerTitle:"Edit"
        })
    },
},{
    headerTitleAlign:"center"
})

const BottomTab = createBottomTabNavigator({
  Home: {
    screen: NavStack,
    navigationOptions: {
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            source={require('../assets/home.png')}
            style={{width: 26, height: 26, tintColor: '#575FCF'}}
          />
        );
      },
    },
  },
  Create: {
    screen: Create,
    navigationOptions: {
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            source={require('../assets/add.png')}
            style={{width: 26, height: 26, tintColor: '#575FCF'}}
          />
        );
      },
    },
  },
});

export default Routes = createAppContainer(BottomTab);