import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

function ArtistsDirectory(props) {

    const renderDirectoryItem = ({ item }) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require('../assets/images/artists/AdamBeyer_360x360.jpg')}}
            />
        );
    };

    return (
        <FlatList
            data={props.artists}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default ArtistsDirectory;