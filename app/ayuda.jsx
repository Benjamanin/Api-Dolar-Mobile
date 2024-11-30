import {ScrollView } from "react-native";
import React from "react";
import Steps from "../components/steps";
import About from "../components/about";
import AboutTitle from "../components/AboutTitle.jsx";
import StepsTitle from "../components/StepsTitle";

export default function Ayuda() {    
    return (
        <ScrollView>
            <StepsTitle></StepsTitle>
            <Steps/>
            <AboutTitle></AboutTitle>
            <About></About>
        
        </ScrollView>
    );
}