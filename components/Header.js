import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';
import BodyText from './BodyText';

const Header = (props) => {

    return (
        <View style={{
            ...styles.headerBase, ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
            })
        }}>
            <BodyText style={styles.headerText}>
                {props.title}
            </BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        paddingTop: 30,
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
        paddingTop: 30,
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIOS: {
        backgroundColor: Colors.secondary,
        paddingTop: 30,
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 25
    }
})

export default Header;