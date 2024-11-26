import Bodystyles from "./styles/StyleBody";
import { View, Text, TextInput, Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, { useState } from "react";

const data = [
    { label: "PESO ARGENTINO (ARS)", value: "ARS" },
    { label: "DOLAR ESTADOUNIDENSE (USD)", value: "USD" },
    { label: "EURO (EUR)", value: "EUR" },
    { label: "REAL BRASILEÑO (BRL)", value: "BRL" },
    { label: "PESO URUGUAYO (UYU)", value: "UYU" },
];

export default function Body() {

    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <>
            <View style={Bodystyles.container}>
                <View style={Bodystyles.containerQuantity}>
                    <Text style={Bodystyles.texto}>importe</Text>
                    <TextInput placeholder="Quantity" style={Bodystyles.textinput} />
                </View>

                <View style={Bodystyles.containerDropdown}>
                    <Dropdown
                    style={Bodystyles.Dropdown}
                    data={data}  
                    labelField={"label"}
                    valueField={"value"}
                    value={selectedValue}
                    onChange={ (value) => setSelectedValue(value) }
                    />
                    
                </View>
            </View>
        </>
    );
}