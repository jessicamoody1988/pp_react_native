import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'

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

export default class MediaPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            playbackInstance: null,
            currentIndex: 0,
            volume: 1.0,
            isBuffering: false
        };
    }

    async componentDidMount() {
        try {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: true
            });

            this.loadAudio();
        } catch (e) {
            console.log(e);
        }
    }

    async loadAudio() {
        const { currentIndex, isPlaying, volume } = this.state;

        try {
            const playbackInstance = new Audio.Sound();
            const source = {
                uri: audioFiles[currentIndex].uri
            };
            const status = {
                shouldPlay: isPlaying,
                volume
            };

            playbackInstance.setOnPlaybackStatusUpdate(this.setOnPlaybackStatusUpdate);
            await playbackInstance.loadAsync(source, status, false);
            this.setState({ playbackInstance });
        } catch (e) {
            console.log(e);
        }
    }

    setOnPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering
        })
    }

    handlePlayPause = async () => {
        const { isPlaying, playbackInstance } = this.state;
        isPlaying ?
            await playbackInstance.pauseAsync() :
            await playbackInstance.playAsync();
        this.setState({
            isPlaying: !isPlaying
        });
    }

    handlePreviousTrack = async () => {
        let { playbackInstance, currentIndex } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
            currentIndex < audioFiles.length - 1 ?
                (currentIndex -= 1) :
                (currentIndex = 0);
            this.setState({
                currentIndex
            })
            this.loadAudio()
        }
    }

    handleNextTrack = async () => {
        let { playbackInstance, currentIndex } = this.state;
        if (playbackInstance) {
            await playbackInstance.unloadAsync();
            currentIndex < audioFiles.length - 1 ?
                (currentIndex += 1) :
                (currentIndex = 0);
            this.setState({
                currentIndex
            });
            this.loadAudio()
        }
    }

    renderFileInfo() {
        const { playbackInstance, currentIndex } = this.state;
        return playbackInstance ? (
            <View style={styles.trackInfo}>
                <Text style={[styles.trackInfoText, styles.largeText]}>
                    {audioFiles[currentIndex].title}
                </Text>
                <Text style={[styles.trackInfoText, styles.smallText]}>
                    {audioFiles[currentIndex].artist}
                </Text>
            </View>
        ) : null
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.albumCover}
                    source={ require('../assets/images/us-placeholder-square.jpg')}
                />
                <View style={styles.controls}>
                    <TouchableOpacity 
                        style={styles.control}
                        onPress={this.handlePreviousTrack}
                    >
                        <Ionicons 
                            name='skip-backward'
                            size={48}
                            color='#444'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.control}
                        onPress={this.handlePlayPause}
                    >
                        {this.state.isPlaying ? (
                            <Ionicons
                                name='pause'
                                size={48}
                                color='#444'
                            />
                        ) : (
                            <Ionicons 
                                name='play-circle'
                                size={48}
                                color='#444'
                            />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.control}
                        onPress={this.handleNextTrack}
                    >
                        <Ionicons
                            name='skip-forward'
                            size={48}
                            color='#444'
                        />
                    </TouchableOpacity>
                </View>
                {this.renderFileInfo()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    albumCover: {
        width: 250,
        height: 250
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    control: {
        margin: 20
    },
    controls: {
        flexDirection: 'row'
    },
    largeText: {
        fontSize: 22
    },
    smallText: {
        fontSize: 16
    },
    trackInfo: {
        padding: 40,
        backgroundColor: '#fff'
    },
    trackInfoText: {
        textAlign: 'center',
        flexWrap: 'wrap',
        color: '#550088'
    }
})