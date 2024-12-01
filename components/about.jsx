import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function About() {
    return (
    <View style={styles.screen}>
      <View style={styles.infoBox}>
        <Text style={styles.title}>Último Cierre </Text>
        <Text style={styles.description}>
        El último cierre es el valor final al que una moneda se intercambió al final del último día hábil de operaciones en el mercado, y sirve como referencia clave para evaluar su rendimiento y tendencia futura.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.title}>Fecha de Actualización</Text>
        <Text style={styles.description}>
        La fecha de actualización indica el último momento en que cambió la cotización de la moneda en el mercado, reflejando su valor más reciente disponible.
        </Text>
      </View>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
    </View>
      );
    }

const styles = StyleSheet.create({

    infoBox: {
        marginLeft: 20,
        marginRight: 20,
        height: 190,
        borderWidth: 0.5,
        borderRadius: 20,
        borderColor: '#ddd', 
        marginBottom: 30,  
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 8,
        shadowOpacity: 0.15,
        elevation: 6,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        // color: 'rgba(130, 118, 97, 0.907)', 
        color: '#26b99a',
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: '#777', 
    },
});
