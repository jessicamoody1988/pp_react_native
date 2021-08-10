import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import { EVENTS } from '../shared/events';

function RenderEvent({ event }) {
    if (event) {
        return (
            <Card
                featuredTitle={event.name}
                image={require('../assets/images/artists/AdamBeyer_360x360.jpg')}
            >
                <Text style={{ margin: 10 }}>
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

export default CalendarInfo;