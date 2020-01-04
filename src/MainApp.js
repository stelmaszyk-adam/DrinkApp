import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator, navigationOptions } from 'react-navigation';

import ChallangesView from './views/challangesPackage/ChallangesView';
import FriendsView from './views/friendsPackage/FriendsView';
import PlaceContainer from './views/mapPackage/placeContainer';
import RankingView from './views/rankingPackage/RankingView';
import SettingsView from './views/settingsPackage/SettingsView';
import hamburgerMenu from './assets/icons/hamburgerMenu.png'
import ViewChallange from './views/challangesPackage/ViewChallange'
import MapContainer from './views/mapPackage/mapContainer'
import CouponsContainer from './views/couponsPackage/couponsContainer'


const MainNavigator = createDrawerNavigator(
    {
        MapContainer: {
            navigationOptions: {
                drawerLabel: "Map Of Places"
            },
            screen: MapContainer
        },
        CouponsContainer: {
            navigationOptions: {
                drawerLabel: "Discounts"
            },
            screen: CouponsContainer
        },
        ChallangesView: {
            navigationOptions: {
                drawerLabel: "Challanges"
            },
            screen: ChallangesView
        },
        RankingView: {
            navigationOptions: {
                drawerLabel: "Ranking"
            },
            screen: RankingView
        },
        FriendsView: {
            navigationOptions: {
                drawerLabel: "Friends"
            },
            screen: FriendsView
        },
        SettingsView: {
            navigationOptions: {
                drawerLabel: "Settings"
            },
            screen: SettingsView
        },
    }
);

const DrawerStackNavigator = createStackNavigator(
    {
        DrawerRoute: {
            screen: MainNavigator,
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#E6B40E' },
            title: navigation.state.routes[navigation.state.index].routeName,
            headerTintColor: '#fff',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                    <Image   resizeMode="contain" style={{height: 25, width: 25, marginLeft: 8, tintColor: 'white'}}
                    source={hamburgerMenu} />
                </TouchableOpacity>
            )
        })
    }
)

const AppStack = createStackNavigator(
    {
        DrawerRoute: {
            screen: DrawerStackNavigator,
            navigationOptions: {
                header: null,
            }
        },
        PlaceContainer: {
            screen: PlaceContainer,
            navigationOptions: () => ({
                headerStyle: { backgroundColor: 'rgba(76,76,76,1)'},
                title: 'Details',
                headerTintColor: '#fff',

            })
        },
        ViewChallange: {
            screen: ViewChallange,
            navigationOptions: () => ({
                headerStyle: { backgroundColor: 'rgba(76,76,76,1)' },
                title: 'Challange',
                headerTintColor: '#fff',

            })
        }
    }
)

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
    }
))

