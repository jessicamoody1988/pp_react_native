import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import { ARTISTS } from '../shared/artists';

function RenderArtist({ artist }) {
    if (artist) {
        return (
            <View>
                <View style={styles.RenderArtistCardArtistNameContainer}>
                    <Text style={styles.RenderArtistCardArtistName}>
                        {artist.name}
                    </Text>
                </View>
                <Card
                    image={artist.image}
                    imageStyle={styles.RenderArtistCardImage}
                >
                    <Text style={{ margin: 10 }}>
                        {artist.description}
                    </Text>
                </Card>
            </View>
        );
    }
    return <View />
}

class ArtistInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            artists: ARTISTS
        };
    }

    static navigationOptions = {
        title: 'ArtistInfo'
    }

    render() {
        const artistId = this.props.navigation.getParam('artistId');
        const artist = this.state.artists.filter(artist => artist.id === artistId)[0];
        return <RenderArtist artist={artist} />
    }
}

const styles = StyleSheet.create({
    RenderArtistCardArtistName: {
        fontSize: 24
    },
    RenderArtistCardArtistNameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    RenderArtistCardImage: {
        width: 360,
        height: 360
    }
})

export default ArtistInfo;