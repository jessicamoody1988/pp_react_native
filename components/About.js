import React, { Component } from 'react';
import { Text, View } from 'react-native';

class About extends Component {

    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
            <View>
                <Text>About Component</Text>
            </View> 
        );
    }
}

export default About;