import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name='trending'
                options={{
                    title: 'Trending',
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name='cart'
                options={{
                    title: 'Cart',
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false
                }}
            />
        </Tabs>
    )
}

export default _layout