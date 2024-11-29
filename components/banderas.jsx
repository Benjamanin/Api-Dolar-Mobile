import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import chile from "../icons/chile.png";
import ARS from "../icons/ARS.png";
import USD from "../icons/USD.png";
import EUR from "../icons/EUR.png";
import BRL from "../icons/BRL.png";
import UYU from "../icons/UYU.png";
import flecha_circular from "../icons/flecha_circular.png";

export default function Banderas() {
    return (
        <View style={styles.container}>
            {/* Mostrar la bandera de Argentina */}
            <Image source={ARS} style={styles.iconBand} />

            <Image source={flecha_circular} style={styles.iconBand} />
            <Image source={chile} style={styles.iconBand} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -22,
        marginBottom: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        
    },
    iconBand: {
        width: 40,  // Ancho de la imagen
        height: 40, // Alto de la imagen
        resizeMode: 'contain', // Ajuste de la imagen
        marginHorizontal: 3, // Margen horizontal
    },
    text: {
        fontSize: 20,
        marginTop: 10,
    },
});
