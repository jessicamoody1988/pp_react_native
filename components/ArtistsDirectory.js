import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ARTISTS } from '../shared/artists';

class ArtistsDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: ARTISTS
        };
    }

    static navigationOptions = {
        title: 'ArtistsDirectory'
    }

    render() {
        const { navigate } = this.props.navigation;

        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    onPress={() => navigate('ArtistInfo', { artistId: item.id })}
                    leftAvatar={{ source: require('../assets/images/artists/AdamBeyer_360x360.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.artists}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default ArtistsDirectory;