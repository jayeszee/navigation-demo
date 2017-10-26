import { StackNavigator, DrawerNavigator, NavigationActions} from 'react-navigation';
import React from 'react';
import {View} from 'react-native'
import {Constants} from 'expo'
import HomeScreen from './../screens/home';
import SecondScreen from './../screens/second';
import ThirdScreen from './../screens/third';

import DrawerComponent from './drawer'

const StackRoutes = {
	HomeScreen: {
		screen: HomeScreen
  },
  SecondScreen: {
		screen: SecondScreen
  },
  ThirdScreen: {
		screen: ThirdScreen
  },
}

const StackNav = StackNavigator(StackRoutes, { initialRouteName: 'HomeScreen', cardStyle: {}});

const DrawerRoutes = {
	Home: {
		screen: StackNav
	},
  Second: {
    screen: SecondScreen
	},
  Third: {
    screen: ThirdScreen
  },
};


const DrawerNavigatorConfig = {
	contentComponent: DrawerComponent,
}

const RootNavigator =
	StackNavigator({
		Drawer: {
			name: 'Drawer',
			screen: DrawerNavigator(
				DrawerRoutes, DrawerNavigatorConfig
			),
		},
		...StackRoutes
	},
		{
			headerMode: 'none'
		}
	);

export default RootNavigator;
