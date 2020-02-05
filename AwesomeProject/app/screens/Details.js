import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {Header,Actions, Info} from '../components/UserDetails'
import colors from '../config/colors'

//flex almost the entire screen
class Details extends Component {
    render() {
        const contact = this.props.navigation.state.params;
        return (
             <View style={{backgroundColor:colors.background}}>
                <Header {...contact}/>
                <Actions {...contact}/>
                <Info {...contact}/>
             </View>
        );
    }
}

export default Details;