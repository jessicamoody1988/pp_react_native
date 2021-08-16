import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'
// import { Audio } from 'expo-av'
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
]

function MediaPlayerControls (props) {
    if (props.isPlaying === 'true') {
        return (
            <View style={styles.mediaPlayerControlsContainer}>
                <Icon 
                    name='pause-circle'
                    type='font-awesome'
                    onPress={() => pressPause()}
                />
                <Icon
                    name='stop-circle'
                    type='font-awesome'
                    onPress={() => pressPlay()}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.mediaPlayerControlsContainer}>
                <Icon
                    name='play-circle'
                    type='font-awesome'
                    onPress={() => pressPlay()}
                />
                <Icon
                    name='stop-circle'
                    type='font-awesome'
                    onPress={() => pressPlay()}
                />
            </View>
        );

    }
}

export default class MediaPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        }
    }

    pressPlay() {

    }

    pressPause() {

    }

    
    render () {
        return (
            <View style={styles.container}>
                <Text 
                    style={styles.mediaPlayerTitle}
                >
                    Top 5 Tracks
                </Text>
                <Image 
                    style={styles.mediaPlayerImage} 
                    source={require('../assets/images/us-placeholder-square.jpg')} 
                />
                <MediaPlayerControls isPlaying={this.state.isPlaying} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mediaPlayerControlsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    mediaPlayerImage: {
        width: 250,
        height: 250
    },
    mediaPlayerTitle: {},
    
})