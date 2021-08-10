import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import { ARTISTS } from '../shared/artists';

function RenderArtist({ artist }) {
    if (artist) {
        return (
            <Card
                featuredTitle={artist.name}
                image={require('../assets/images/artists/AdamBeyer_360x360.jpg')}
            >
                <Text style={{ margin: 10 }}>
                    {artist.description}
                </Text>
            </Card>
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
        return <RenderCampsite artist={artist} />
    }
}

export default ArtistInfo;