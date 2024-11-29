import { View, Text } from "react-native";
import React from "react";
import { Tabs } from 'expo-router';
import TabBar from "../components/TabBar";


export default function _layout() {
    return (
        //Barra de abajo
        <Tabs
        //prop de la tabbar
        tabBar = {props => <TabBar {...props} />}
        >
            <Tabs.Screen 
            name="index"
            options={{
                title: 'Home'
            }}
            >
            </Tabs.Screen>

            <Tabs.Screen 
            name="ayuda"
            options={{
                title: 'Ayuda'
            }}
            > 
            </Tabs.Screen>
           
        </Tabs>
    );
}