import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { ARTISTS } from '../shared/artists';

class ArtistsDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: ARTISTS.sort((a, b) => (a.name > b.name ? 1 : -1))
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
                    leftAvatar={{ source: item.image }}
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

const styles = StyleSheet.create({
    renderDirectoryItemRow: {
        flexDirection: 'row'
    }
})

export default ArtistsDirectory;