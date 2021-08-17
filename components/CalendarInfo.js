import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import { EVENTS } from '../shared/events';

function RenderEvent({ event }) {
    if (event) {
        return (
            <Card
                image={ event.image }
                imageStyle={styles.renderEventImage}
            >
                <View style={styles.RenderEventDateContainer}>
                    <Text style={styles.RenderEventDate}>
                        { event.startMonth }/{ event.startDay }/{ event.startYear}
                    </Text>
                </View>
                <Text style={styles.RenderEventDescription}>
                    {event.description}
                </Text>
            </Card>
        );
    }
    return <View />
}

class CalendarInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: EVENTS
        };
    }

    static navigationOptions = {
        title: 'CalendarInfo'
    }

    render() {
        const eventId = this.props.navigation.getParam('eventId');
        const event = this.state.events.filter(event => event.id === eventId)[0];
        return <RenderEvent event={event} />
    }
}

const styles = StyleSheet.create({
    RenderEventDate: {
        fontFamily: 'MajorMonoDisplayReg'
    },
    RenderEventDateContainer: {
        alignItems: 'flex-end'
    },
    RenderEventDescription: {
        margin: 10,
        fontSize: 16,
    },
    renderEventImage: {
        resizeMode: 'contain'
    }
});

export default CalendarInfo;