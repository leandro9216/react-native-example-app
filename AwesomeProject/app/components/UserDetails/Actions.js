import React from 'react'
import {View} from 'react-native'

import styles from './styles'
import Row from './Row'

const Actions = ({email,cell, phone}) => {
    return (
        <View style={styles.actionContainer}>
            <Row
                label="email"
                body={email}
                actions={[
                    {
                        onPress: () => null, 
                        iosIcon:'ios-mail', 
                        androidIcon:'md-mail'
                    },
                ]}/>
                  <Row
                label="cell"
                body={cell}
                actions={[
                    {
                        onPress: () => null, 
                        iosIcon:'ios-call', 
                        androidIcon:'md-call'
                    },
                    {
                        onPress: () => null, 
                        iosIcon:'ios-text', 
                        androidIcon:'md-text'
                    },
                ]}/>
                 <Row
                label="home"
                body={phone}
                actions={[
                    {
                        onPress: () => null, 
                        iosIcon:'ios-call', 
                        androidIcon:'md-call'
                    },
                ]}/>
        </View>
    );
};

export default Actions;

/* <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>cell</Text>
                    <Text style={styles.actionBody}>{toPhoneNumber(cell)}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity onPress={()=> null}>
                        <Icon color={colors.link}
                        size={ICON_SIZE}
                        style={styles.actionIcon}
                        name={Platform.OS ==='ios' ? 'ios-call' : 'md-call'}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> null}>
                        <Icon color={colors.link}
                        size={ICON_SIZE}
                        style={styles.actionIcon}
                        name={Platform.OS ==='ios' ? 'ios-text' : 'md-text'}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>home</Text>
                    <Text style={styles.actionBody}>{toPhoneNumber(phone)}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity onPress={()=> null}>
                        <Icon color={colors.link}
                        size={ICON_SIZE}
                        style={styles.actionIcon}
                        name={Platform.OS ==='ios' ? 'ios-call' : 'md-call'}></Icon>
                    </TouchableOpacity>
                </View>
            </View>*/