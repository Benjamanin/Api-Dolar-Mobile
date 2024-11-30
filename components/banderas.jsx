import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

import chile from "../icons/chile.png";
import ARS from "../icons/ARS.png";
import USD from "../icons/USD.png";
import EUR from "../icons/EUR.png";
import BRL from "../icons/BRL.png";
import UYU from "../icons/UYU.png";
import flecha_circular from "../icons/flecha_circular.png";

// Mapeo de monedas a las imágenes
const monedas = {
  ARS: ARS,
  USD: USD,
  EUR: EUR,
  BRL: BRL,
  UYU: UYU,
};

export default function Banderas({monedaSeleccionada}) {
  const [rotation] = useState(new Animated.Value(0)); // Valor inicial para la rotación

  useEffect(() => {
    // Iniciar la animación de rotación
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,       // Hacia el valor final de la animación
        duration: 2000,   // Duración de un ciclo completo en milisegundos
        useNativeDriver: true, // Usa el driver nativo para mejor rendimiento
      })
    ).start();
  }, [rotation]);

  // Interpolación para convertir el valor de la animación en grados de rotación
  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],  // Rota de 0 a 360 grados
  });

  return (
    <View style={styles.container}>
      {/* Mostrar la moneda seleccionada con su bandera */}
      {monedas[monedaSeleccionada] && (
        <Image source={monedas[monedaSeleccionada]} style={styles.iconBand} />
      )}

      {/* Flecha rotando animada */}
      <Animated.Image
        source={flecha_circular}
        style={[styles.iconBand, { transform: [{ rotate }] }]} // Aplica la rotación animada
      />

      {/* Bandera de Chile */}
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
