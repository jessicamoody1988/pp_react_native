import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RenderGenre({ item, genre  }) {
    switch(genre) {
        case 'house':
            return (
                <View style={styles.RenderGenreHouseView}>
                    <Text style={styles.RenderGenreHouse}>
                        House
                    </Text>
                </View>
            );
        case 'trip hop':
            return (
                <View style={styles.RenderGenreTripHopView}>
                    <Text style={styles.RenderGenreTripHop}>
                        TripHop
                    </Text>
                </View>
            );
        case 'tech house':
            return (
                <View style={styles.RenderGenreTechHouseView}>
                    <Text style={styles.RenderGenreTechHouse}>
                        TechHouse
                    </Text>
                </View>
            );
    }
    if (genre === 'techno') {
        return (
            <View style={styles.RenderGenreTechnoView}>
                <Text style={styles.RenderGenreTechno}>
                    Techno
                </Text>
            </View>
        );
    } else {
        return <Text>{genre}</Text>
    }
}

const styles = StyleSheet.create({
    RenderGenreHouse: {
        color: 'blue',
        fontWeight: 'bold'
    },
    RenderGenreHouseView: {
        backgroundColor: '#048da8',
        width: 57,
        padding: 2,
        margin: 2,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue'
    },
    RenderGenreTechHouse: {
        color: '#c89b7b',
        fontWeight: 'bold'
    },
    RenderGenreTechHouseView: {
        backgroundColor: '#a4036f',
        width: 82,
        padding: 2,
        margin: 2,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'green'
    },
    RenderGenreTechno: {
        color: 'white',
        fontWeight: 'bold'
    },
    RenderGenreTechnoView: {
        backgroundColor: 'black',
        width: 57,
        padding: 2,
        margin: 2,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    RenderGenreTripHop: {
        color: '#c9f299',
        fontWeight: 'bold'
    },
    RenderGenreTripHopView: {
        backgroundColor: '#a4036f',
        width: 57,
        padding: 2,
        margin: 2,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
});