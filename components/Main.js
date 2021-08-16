import Constants from 'expo-constants';
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

import ArtistsDirectory from './ArtistsDirectory';
import ArtistInfo from './ArtistInfo';
import About from './About';
import Calendar from './Calendar';
import CalendarInfo from './CalendarInfo';
import { COLORS } from '../shared/colors';
import Home from './Home';

const DirectoryNav = createStackNavigator(
    {
        ArtistsDirectory: { 
            screen: ArtistsDirectory,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Artists',
                headerLeft: <Icon
                    name='account-music'
                    type='material-community'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            }),
        },
        ArtistInfo: { 
            screen: ArtistInfo,
            navigationOptions: () => ({
                headerTitle: 'Artist Details'
            })
        }
    },
    {
        initialRouteName: 'ArtistsDirectory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: COLORS.navBackground
            },
            headerTintColor: COLORS.navColorInactive,
            headerTitleStyle: {
                color: COLORS.navColorInactive
            }
        }
    }
);

const CalendarNav = createStackNavigator(
    {
        Calendar: { 
            screen: Calendar,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon
                    name='calendar-heart'
                    type='material-community'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        CalendarInfo: { screen: CalendarInfo }
    },
    {
        initialRouteName: 'Calendar',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: COLORS.navBackground
            },
            headerTintColor: COLORS.navColorInactive,
            headerTitleStyle: {
                color: COLORS.navColorInactive
            }
        }
    }
);

const HomeNav = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: COLORS.navBackground
            },
            headerTintColor: COLORS.navColorInactive,
            headerTitleStyle: {
                color: COLORS.navColorInactive
            },
            headerLeft: <Icon
                name='home'
                type='ionicons'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AboutNav = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: COLORS.navBackground
            },
            headerTintColor: COLORS.navColorInactive,
            headerTitleStyle: {
                color: COLORS.navColorInactive
            },
            headerLeft: <Icon
                name='book-music'
                type='material-community'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const NavDrawerContent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('../assets/images/recordLogo_white.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>
                        J&J
                    </Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNav = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNav,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='home'
                        type='ionicons'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        ArtistsDirectory: { 
            screen: DirectoryNav,
            navigationOptions: {
                drawerLabel: 'Artists',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='account-music'
                        type='material-community'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Calendar: { 
            screen: CalendarNav,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='calendar-heart'
                        type='material-community'
                        size={24}
                        color={tintColor}
                    />
                )
            } 
        }, 
        About: { 
            screen: AboutNav,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='book-music'
                        type='material-community'
                        size={24}
                        color={tintColor}
                    />
                ),
                
            },
        }
    },
    {
        drawerBackgroundColor: COLORS.navBackground,
        drawerType: 'slide',
        contentComponent: NavDrawerContent,
        inactiveTintColor: COLORS.navColorInactive,
        contentOptions: {
            labelStyle: {
                color: COLORS.navColorInactive
            },
            activeTintColor: COLORS.navColorActive,
            inactiveTintColor: COLORS.navColorInactive
        }
    }
);

const AppNav = createAppContainer(MainNav);

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppNav />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
    drawerHeader: {
        backgroundColor: COLORS.navBackground,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: COLORS.navColorInactive,
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 2,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;