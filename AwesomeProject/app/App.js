import React from 'react';
import {createAppContainer} from 'react-navigation';
import {DrawerNavigator,Tabs} from './config/router';
import {Platform} from 'react-native'

const ContainerAppDrawer = createAppContainer(DrawerNavigator);
const ContainerAppTab = createAppContainer(Tabs);

export default class App extends React.Component {
  render() {
    if (Platform.OS === 'ios') return <ContainerAppTab/>; 
    else return <ContainerAppDrawer/>;

  }
}