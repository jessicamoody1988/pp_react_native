import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function ArtistInfo(props) {
    return <RenderArtist artist={props.artist} />;
}

export default ArtistInfo;