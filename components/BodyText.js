import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BodyText = (props) => <Text style={{ ...styles.vinnyFont, ...props.style }}>{props.children}</Text>


const styles = StyleSheet.create({
    vinnyFont: {
        fontFamily: 'vinnybold-sans'

    }

});

export default BodyText;