import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const handleGuessInput = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resetNumberHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmNumberHandler = () => {
        const confirmedNumber = parseInt(enteredValue);

        if (isNaN(confirmedNumber) || confirmedNumber <= 0 || confirmedNumber > 99) {
            Alert.alert('Invalid Number!', 'Number should be between 1-99', [{ text: 'OKAY', style: 'destructive', onPress: resetNumberHandler }])
            return;
        }
        setSelectedNumber(confirmedNumber);
        setConfirmed(true)
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedFigure;
    if (confirmed) {
        confirmedFigure = (
            <Card style={styles.confirmedCard}>
                <Text>Selected Number</Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <View style={styles.startGameButtonView}>
                    <MainButton onPress={() => props.onStartGame(selectedNumber)}>
                        START GAME
                    </MainButton>
                </View>
            </Card>);
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.start}>
                <BodyText style={styles.start1}> Start A New Game!</BodyText>
                <Card style={styles.inputContainer}>
                    <View style={styles.selectText}>
                        <BodyText>Select a Number</BodyText>
                    </View>
                    <Input style={styles.input}
                        keyboardType='number-pad'
                        autoCapitalize='none'
                        autoCorrect={false}
                        blurOnSubmit
                        maxLength={2} value={enteredValue} onChangeText={handleGuessInput} />
                    <View style={styles.buttons}>
                        <View style={styles.button}><Button title={'Reset'} onPress={resetNumberHandler} color={Colors.secondary} /></View>
                        <View style={styles.button}><Button title={'Confirm'} onPress={confirmNumberHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedFigure}
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    start: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    start1: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',

    },
    input: {
        width: 30,
        textAlign: 'center'
    }
    ,
    buttons: {
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    button: {
        width: Dimensions.get('window').width > 250 ? 100 : 50
    },
    confirmedCard: {
        marginTop: 20,
        width: 150,
        alignItems: 'center'
    },
    startGameButtonView: {
        marginVertical: 10
    },
    selectText: {
        paddingTop: 2
    }
})

export default StartGameScreen;