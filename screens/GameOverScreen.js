import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/Colors'

const GameOverScreen = (props) => {

    return (
        <View style={styles.screen}>
            <BodyText style={styles.over}>Game is over!!!</BodyText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/Interswitch-Logo-1.jpg')} fadeDuration={300} style={styles.image} resizeMode={'contain'} />
            </View>
            <BodyText style={styles.textResult1}>Your Opponent needed <Text style={styles.textResult2}>{props.noOfRounds} </Text>rounds to guess your selected number <Text style={styles.textResult2}>{props.number}</Text></BodyText>
            <View style={styles.restartButton}>
                <Button title={'RESTART GAME'} onPress={props.onShowStartGame} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    restartButton: {
        margin: 10
    },
    over: {
        fontSize: 20
    },
    image: {
        width: '100 %',
        height: '100 %'
    },
    imageContainer: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 150,
        width: 300,
        height: 300,
        overflow: 'hidden',
        margin: 10
    },
    textResult2: {
        color: Colors.primary
    }
    ,
    textResult1: {
        textAlign: 'center'
    }
});

export default GameOverScreen;