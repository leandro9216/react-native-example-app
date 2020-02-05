
import React from 'react'
import {Platform} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import {DrawerButton} from '../components/Header'

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact'
import Me from '../screens/Me'
import {capitalizeFirstLetter} from '../helpers/string'



const LeftDrawerButton = ({navigation}) => {
    if(Platform.OS === 'android'){
        return <DrawerButton onPress={() => navigation.openDrawer()}/>
    }

    return null
}

export const ContactsStack = createStackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: (props) => ({
        title: 'Contacts',
        headerLeft: <LeftDrawerButton {...props}></LeftDrawerButton>
        }),
    },
    Details: {
        screen: Details,
        navigationOptions: ({navigation}) => ({
        title: `${ capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
        }),
    },
});

export const NewContactStack = createStackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: (props) => ({
            title: 'New Contact',
            headerLeft: <LeftDrawerButton {...props}></LeftDrawerButton>
    
            }),
    }
});


export const MeStack = createStackNavigator({
    Me: {
        screen: Me,
        navigationOptions: (props) => ({ 
            title: 'Me',
            headerLeft: <LeftDrawerButton {...props}></LeftDrawerButton>
    
            }),
    }
});

export const Tabs = createBottomTabNavigator({
    Contact: {
        screen: ContactsStack,
        navigationOptions:{
            tabBarLabel: "Contacts",
            tabBarIcon: ({tintColor})=> <Icon name="ios-list" size={35} color={tintColor}></Icon>
        }
    },
    NewContact:{
        screen: NewContactStack,
        navigationOptions:{
            tabBarLabel: "New Contact",
            tabBarIcon: ({tintColor})=> <Icon name="ios-add" size={35} color={tintColor}></Icon>
        }
    },
    Me:{
        screen: MeStack,
        navigationOptions:{
            tabBarLabel: "Me",
            tabBarIcon: ({tintColor})=> <Icon name="ios-contact" size={35} color={tintColor} ></Icon>
        }
    },
});


export const DrawerNavigator = createDrawerNavigator({
    Contact: {
        screen: ContactsStack,
        navigationOptions:{
            tabBarLabel: "Contacts",
        }
    },
    NewContact:{
        screen: NewContactStack,
        navigationOptions:{
            tabBarLabel: "New Contact",
        }
    },
    Me:{
        screen: MeStack,
        navigationOptions:{
            tabBarLabel: "Me",
        }
    },
});
