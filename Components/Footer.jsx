import { View, Text, FlatList } from "react-native";
import Footerstyles from "./styles/StyleFooter";

const data = [
    {id: 1, title: "Paso 1", description: "Elige la moneda que deseas convertir a pesos chilenos.", subtitle: "Selecciona la divisa." },
    {id: 2, title: "Paso 2", description: "Escribe la cantidad de dinero que deseas convertir. El conversor te mostrará el valor equivalente en pesos chilenos según la tasa de cambio actual.", subtitle: "Ingresa la cantidad." },
    {id: 3, title: "Paso 3", description: "Verifica la tasa de cambio y asegúrate de que estás satisfecho con el valor convertido.", subtitle: "Presione Convertir." },
];

export default function Footer() {
    const renderItem = ({ item }) => {
        return (
            <View style={Footerstyles.Carrusel}>
                <Text style={Footerstyles.title}>{item.title}</Text>
                <Text style={Footerstyles.subtitle}>{item.subtitle}</Text>
                <Text style={Footerstyles.description}>{item.description}</Text>
            </View>
        );
    };

    return (
        <>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />        
        </>
    );
}