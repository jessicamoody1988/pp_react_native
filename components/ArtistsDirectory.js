import React, { Component } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import { ARTISTS } from '../shared/artists';
import { FONTS } from '../shared/fonts';

class ArtistsDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artists: ARTISTS.sort((a, b) => (a.name > b.name ? 1 : -1)),
            fontsLoaded: false
        };
    }

    static navigationOptions = {
        title: 'ArtistsDirectory'
    }

    async _loadFontsAsync() {
        await Font.loadAsync(FONTS);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if (this.state.fontsLoaded) {
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
        } else {
            return <AppLoading />;
        }
    }
}

const styles = StyleSheet.create({
    renderDirectoryItemRow: {
        flexDirection: 'row'
    },
    renderDirectItemTitleStyle: {
        fontFamily: 'RighteousReg',
        fontSize: 20
    }
})

export default ArtistsDirectory;