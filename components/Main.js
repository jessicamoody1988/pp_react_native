import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ArtistsDirectory from './ArtistsDirectory';
import ArtistInfo from './ArtistInfo';
import Home from './Home';

const DirectoryNav = createStackNavigator(
    {
        ArtistsDirectory: { screen: ArtistsDirectory },
        ArtistInfo: { screen: ArtistInfo }
    },
    {
        initialRouteName: 'ArtistsDirectory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'purple'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNav = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'purple'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNav = createDrawerNavigator(
    {
        Home: { screen: HomeNav },
        ArtistsDirectory: { screen: DirectoryNav }
    },
    {
        drawerBackgroundColor: 'purple'
    }
);

const AppNav = createAppContainer(DirectoryNav);

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ArtistsDirectory />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    }
});

export default Main;