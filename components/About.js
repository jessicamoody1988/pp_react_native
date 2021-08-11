import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class About extends Component {

    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require('../assets/images/logo-white-320x173.jpg')} />
                </View>
                <Text>About Component</Text>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    image: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default About;