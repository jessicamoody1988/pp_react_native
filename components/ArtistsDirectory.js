import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

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
                    titleStyle={styles.renderDirectItemTitleStyle}
                    onPress={() => navigate('ArtistInfo', { artistId: item.id })}
                    leftAvatar={{
                        source: item.image,
                        size: 'large',
                        
                    }}
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
    },
    renderDirectItemTitleStyle: {
        fontFamily: 'SpecialEliteReg',
        fontSize: 20
    }
})

export default ArtistsDirectory;