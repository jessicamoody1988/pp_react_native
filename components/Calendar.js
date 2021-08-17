import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { EVENTS } from '../shared/events';

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: EVENTS
        };
    }

    static navigationOptions = {
        title: 'Calendar'
    }

    render() {
        const { navigate } = this.props.navigation;

        const renderCalendarItem = ({ item }) => {
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigate('CalendarInfo', { eventId: item.id })}>
                        <Image 
                            source={ item.image } 
                            style={styles.flyer}
                        />
                    </TouchableOpacity>
                </View>
            );
        };

        return (
            <FlatList
                data={this.state.events}
                renderItem={renderCalendarItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flyer: {
        width: 360,
        height: 225,
        resizeMode: 'contain'
    }
})

export default Calendar;