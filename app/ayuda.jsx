import { View, Text, ScrollView } from "react-native";
import React from "react";
import Texto from "../components/texto";
import Steps from "../components/steps";

export default function Ayuda() {    
    return (
        <ScrollView>
            <Text>Pasos</Text>
            <Steps/>

            <Texto />
        </ScrollView>
    );
}