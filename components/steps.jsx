import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Steps() {
    return (
    <View style={styles.screen}>
      <View style={styles.infoBox}>
        <Text style={styles.title}>Paso 1 </Text>
        <Text style={styles.subtitle}>Ingresa la divisa</Text>
        <Text style={styles.description}>
        Elige la moneda que deseas convertir a pesos chilenos.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.title}>Paso 2</Text>
        <Text style={styles.subtitle}>Ingresa la cantidad</Text>
        <Text style={styles.description}>
        Escribe la cantidad de dinero que deseas convertir. El conversor te mostrará el valor equivalente en pesos chilenos según la tasa de cambio actual.
        </Text>
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.title}>Paso 3</Text>
        <Text style={styles.subtitle}>Presiona Convertir</Text>
        <Text style={styles.description}>
        Verifica la tasa de cambio y asegúrate de que estás satisfecho con el valor convertido.
        </Text>
      </View>
      
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
        borderColor: '#ddd',  // Color de borde más suave
        marginBottom: 30,  // Espaciado entre elementos
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
    subtitle: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 8,
        color: '#555',  
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: '#777',  // Color de descripción
    },
});
