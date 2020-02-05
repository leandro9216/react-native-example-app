import React, {Component} from 'react'
import {View,Text,FlatList} from 'react-native'
import {contacts} from '../config/data'
import colors from '../config/colors'
import {ListItem} from '../components/ListItem'

//flex almost the entire screen
// KeyExtractor: tells the list to use the ids for the react keys instead of the default key property.
class Contacts extends Component{

    handleRowPress = (item) => {
        return this.props.navigation.navigate('Details',item);
    };
    render() {
        return (
            <FlatList style={{backgroundColor : colors.background}}
            data = {contacts}
            renderItem={({item})=> 
                <ListItem contact={item} onPress = {() => this.handleRowPress(item)} /> 
            }
            keyExtractor={(item) => item.email}/>
        );
    }
}

export default Contacts;


            //  <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            //     <Text> Contacts Screen </Text>
            //  </View>