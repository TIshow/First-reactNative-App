import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image 
                    //source={require('../assets/success.png')}
                    source={{uri: 'https://cdn-ak.f.st-hatena.com/images/fotolife/w/wakaimon/20171104/20171104193522.png'}}
                    style={styles.image}
                    resizeMode='cover' />
            </View>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userChoicedNumber}</Text>
            <MainButton onPress={props.onRestart}>
                NEW GAME
            </MainButton>
        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },

    image: {
        width: '100%',
        height: '100%'

    }

});

export default GameOverScreen;
