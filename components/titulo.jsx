import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const monedasNombres = {
  ARS: 'Peso Argentino',
  USD: 'Dólar Estadounidense',
  EUR: 'Euro',
  BRL: 'Real Brasileño',
  UYU: 'Peso Uruguayo',
};

export default function Titulo({monedaSeleccionada}) {

  const nombreMoneda = monedasNombres[monedaSeleccionada] || 'moneda';

    return (
        <View
        style={styles.container}
        >
            <Text style={styles.text}>
                Convierta {nombreMoneda} a Peso chileno
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 11,
    },
    text: {
      fontSize: 17,
      color: '#26b99a',
      //negrita
      fontWeight: 'bold',
    },
  });