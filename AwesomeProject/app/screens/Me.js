import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import {Header,Actions,Info} from '../components/UserDetails';
import colors from '../config/colors';
import {me} from '../config/data';
import {PrimaryButton} from '../components/Buttons';


//flex almost the entire screen
class Me extends Component{
    render() {
        return (
            <ScrollView style={{backgroundColor: colors.backgroundColor}}>
                <Header {...me}/>
                <PrimaryButton label="Edit Profile" onPress={()  => null}/>
                <Actions {...me}/>
                <Info {...me}/>
            </ScrollView>
        );
    }
}

export default Me;