import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';


const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndmNumber = Math.floor((Math.random() * (max - min))) + min

    if (rndmNumber === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    }
    else {
        return rndmNumber;
    }
}
const renderListItem = (listLength, itemData) => {
    return <View style={styles.listView}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText style={styles.listText}>{itemData.item}</BodyText>
    </View>

}

const GameScreen = (props) => {
    const firstGuess = generateRandomNumberBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(firstGuess);

    const [pastGuess, setPastGuess] = useState([firstGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);


    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuess.length)
        }
    }, [currentGuess, userChoice, onGameOver])


    const nextGuessHandler = direction => {
        if (direction === 'lower' && currentGuess < props.userChoice || direction === 'greater' && currentGuess > props.userChoice) {
            Alert.alert('Wrong Button Clicked', 'Verify Button clicked, it is wrong!', [{ text: 'Sorry!', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuess((currPastGuess) => [nextNumber.toString(), ...currPastGuess])
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.lowerGreaterButtons}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name={'md-remove'} size={24} color={'white'} />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons name={'md-add'} size={24} color={'white'} />
                </MainButton>
            </Card>
            <View style={styles.listing}>
                {/* <ScrollView>
                    {pastGuess.map((guess, index) => renderListItem(guess, pastGuess.length - index))}
                </ScrollView> */}
                <FlatList data={pastGuess} keyExtractor={(item) => item} renderItem={renderListItem.bind(this, pastGuess.length)} />
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    lowerGreaterButtons: {
        flexDirection: 'row',
        width: 300,
        maxWidth: '80%',
        justifyContent: 'space-around',
        padding: 10
    },
    listing: {
        flex: 1,
        width: '80%'
    },
    listView: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginHorizontal: 30
    },
    listText: {

    }
})


export default GameScreen;