import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles'

const PrimaryButton = ({label, onPress}) => {
    return (
        <View style={styles.primaryButtonContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={() => onPress()}>
                <Text style={styles.primaryButtonText}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PrimaryButton;