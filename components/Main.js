import React, { Component } from 'react';
import { View } from 'react-native';

import ArtistsDirectory from './ArtistsDirectory';
import ArtistInfo from './ArtistInfo';

import { ARTISTS } from '../shared/artists';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: ARTISTS,
            selectedArtist: null
        };
    }

    onArtistSelect(artistId) {
        this.setState({ selectedArtist: artistId });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ArtistsDirectory 
                    artists={this.state.artists}
                    onPress={artistId => this.onArtistSelect(artistId)}
                />
                <ArtistInfo
                    artist={this.state.artists.filter(
                        artist => artist.id === this.state.selectedArtist)[0]
                    }
                />
            </View>
        );
    }
}

export default Main;