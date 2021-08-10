import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
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
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CalendarInfo', { eventId: item.id })}
                    leftAvatar={{ source: require('../assets/images/artists/AdamBeyer_360x360.jpg')}}
                />
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

export default Calendar;