import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Image source={require('../assets/horizontal_on_white_by_logaster.png')} />
            <View>
                <View style={styles.buttons}>
                    <Button title='Artists' />
                    <Button title='Events' />
                </View>
                <View style={styles.buttons}>
                    <Button title='About' />
                    <Button title='Contact' />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        padding: 10
    }
});

export default HomeScreen;