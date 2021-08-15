import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import MediaPlayer from './MediaPlayer';

import { ARTISTS } from '../shared/artists';

const ArtistSpotlight = props => {
    return (
        <View>
            <View style={styles.artistSpotlightContainer}>
                <Text style={styles.artistSpotlightHeader}>Artist Spotlight</Text>
                <Image
                    resizeMethod='scale'
                    resizeMode='contain'
                    // source={require('../assets/images/us-placeholder-square.jpg')}
                    source={props.artist.image}
                    style={styles.artistSpotlightImage}
                />
                <Text style={styles.artistSpotlightName}>Artist Name</Text>
            </View>
            <View style={styles.artistSpotlightTextContainer}>
                <Text>
                    Why was this artist chosen this month? Well right now thats unclear. I just need some filler text to put here for the time being.
                </Text>
            </View>
        </View>
    );
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            featuredArtist: ARTISTS.filter(artist => artist.spotlight)[0]
        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ArtistSpotlight artist={this.state.featuredArtist} />
                <MediaPlayer />
            </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    artistSpotlightContainer: {
        alignItems: 'center'
    },
    artistSpotlightHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        paddingTop: 2
    },
    artistSpotlightImage: {
        width: 300,
        height: 300,
        borderRadius: 45,
        margin: 10
    },
    artistSpotlightName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    artistSpotlightTextContainer: {
        padding: 10,
        paddingTop: 5
    },
    mediaSpotlightContainer: {

    },
    mediaSpotlightHeader: {

    }
})

export default Home;