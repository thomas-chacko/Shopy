import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    borderTopWidth: 0,
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                },
                tabBarActiveTintColor: "#353c47",
                tabBarInactiveTintColor: "#c9c9c9",
            }}
        >
             <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name='home'
                            size={25}
                            color={focused ? '#353c47' : '#c9c9c9'}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name='trending'
                options={{
                    title: 'Trending',
                    headerShown: false,
                    tabBarIcon : ({ focused }) => (
                        <FontAwesome5
                            name='fire'
                            size={25}
                            color={focused ? '#353c47' : '#c9c9c9'}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name='cart'
                options={{
                    title: 'Cart',
                    headerShown: false,
                    tabBarIcon : ({ focused }) => (
                        <Foundation
                            name='shopping-cart'
                            size={25}
                            color={focused ? '#353c47' : '#c9c9c9'}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon : ({ focused }) => (
                        <FontAwesome
                            name='user'
                            size={25}
                            color={focused ? '#353c47' : '#c9c9c9'}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default _layout
