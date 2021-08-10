import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
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
        const navigate = this.props.navigation.navigate;

        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => this.props.navigation.navigate('ArtistInfo', { artistId: item.id })}
                    leftAvatar={{ source: require('../assets/images/artists/AdamBeyer_360x360.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.artists}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default ArtistsDirectory;