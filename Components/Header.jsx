import HeaderStyles from './Styles/StyleHeader';
import { Text, View } from 'react-native';


export default function Header() {
    return (
        <View style={HeaderStyles.container}>
            <Text style={HeaderStyles.texto}>CONVIERTA A PESOS CHILENOS</Text>
            <Text>Agregar imagenes</Text>
        </View>
    );
}