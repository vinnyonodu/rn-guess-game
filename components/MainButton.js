import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';

const MainButton = (props) => {
    let ButtonComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version < 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15
    },
    buttonText: {
        color: 'white',
        fontFamily: 'vinnybold-sans',
        fontSize: 15
    }

});

export default MainButton;