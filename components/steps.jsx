import { View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
//import Footerstyles from "./styles/StyleFooter";
import styles from "./StepsStyles"; 


const data = [
    {id: 1, title: "Paso 1", description: "Elige la moneda que deseas convertir a pesos chilenos.", subtitle: "Selecciona la divisa." },
    {id: 2, title: "Paso 2", description: "Escribe la cantidad de dinero que deseas convertir. El conversor te mostrará el valor equivalente en pesos chilenos según la tasa de cambio actual.", subtitle: "Ingresa la cantidad." },
    {id: 3, title: "Paso 3", description: "Verifica la tasa de cambio y asegúrate de que estás satisfecho con el valor convertido.", subtitle: "Presione Convertir." },
];

export default function Steps() {
    const renderItem = ({ item }) => {
        return (
            //los estilos hay que cambiarlos

            <View style={styles.Carrusel}>
                <Text style={styles.title}>{item.title} </Text>
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
                showsVerticalScrollIndicator={true}
                pagingEnabled={false}
                
                
            />  
             
        
    );
}
