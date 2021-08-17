import AppLoading from 'expo-app-loading';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import SoundPlayer from 'react-native-sound-player';

const audioFiles = [
    {
        title: 'Lumière tamisée1',
        artist: 'Nicole Moudaber1',
        uri: require('../assets/audio/NicoleMoudaber-LumiereTamisee.mp3'),
        imageSource: require('../assets/images/artists/NicoleMoudaber_360x360.jpg')
    },
    {
        title: 'Lumière tamisée2',
        artist: 'Nicole Moudaber2',
        uri: require('../assets/audio/NicoleMoudaber-LumiereTamisee.mp3'),
        imageSource: require('../assets/images/artists/NicoleMoudaber_360x360.jpg')
    }
];

export default class MediaPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            soundFile: loadSoundFile('../assets/audio/NicoleMoudaber-LumiereTamisee.mp3', 'mps' )
        };
    }

    _onFinishedPlayingSubscription = null;
    _onFinishedLoadingSubscription = null;
    _onFinishedLoadingFileSubscription = null;

    componentDidMount() {
        _onFinishedPlayingSubscription = SoundaPlayer.addEventListener('FinishedPlaying', ({ success }) => {
            console.log('finished playing', success);
        });
        _onFinishedLoadingSubscription = SoundaPlayer.addEventListener('FinishedLoading', ({ success }) => {
            console.log('finished loading', success);
        });
        _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener('FinishedLoadingFile', ({ success, name, type }) => {
            console.log('finished loading file', success, name, type);
        });
    }

    componentWillUnmount() {
        _onFinishedPlayingSubscription.remove();
        _onFinishedLoadingSubscription.remove();
        _onFinishedLoadingFileSubscription.remove();
    }

    pressPlay() {
        SoundPlayer.playSoundFile(this.state.soundFile, 'mps');
    }

    pressPause() {

    }

}
