import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.selectedView}>
            <Text style={styles.selectedText}>{props.children}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    selectedView: {
        borderWidth: 2,
        alignItems: 'center',
        borderColor: Colors.secondary,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center'

    },
    selectedText: {
        fontSize: 20,
        color: Colors.secondary
    }
});

export default NumberContainer;