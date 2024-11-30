import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";


const data = [
    {id: 1, title: "Paso 1", description: "Elige la moneda que deseas convertir a pesos chilenos.", subtitle: "Selecciona la divisa." },
    {id: 2, title: "Paso 2", description: "Escribe la cantidad de dinero que deseas convertir. El conversor te mostrará el valor equivalente en pesos chilenos según la tasa de cambio actual.", subtitle: "Ingresa la cantidad." },
    {id: 3, title: "Paso 3", description: "Verifica la tasa de cambio y asegúrate de que estás satisfecho con el valor convertido.", subtitle: "Presiona Convertir." },
];

export default function Steps() {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.Carrusel}>
                
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        );
    };

    return (

        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}  // Ocultar el indicador de scroll
            contentContainerStyle={styles.flatListContainer}  // Espaciado y alineación
            scrollEnabled={true}  // Habilitar el desplazamiento
        />  
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingVertical: 20,  // Agregar espaciado vertical
        paddingHorizontal: 10, // Espaciado horizontal
    },
    Carrusel: {
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
        color: '#26b99a'
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
