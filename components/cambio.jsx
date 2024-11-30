import React, { useState } from 'react'; 
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, Text as RNText } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Subtitulos from './Subtitulos';
import dolar from '../icons/dolar.png';

export default function Cambio(
  {data,
  error,
  cotizaciones,
  monedaSeleccionada,
  cantidad,
  resultado,
  handleSelectChange,
  handleInputChange,
  convertirMoneda,
}) {
  const [fechaActualizacion, setFechaActualizacion] = useState(null);
  const [ultimoCierre, setUltimoCierre] = useState(null);

  if (!data || !cotizaciones) {
    return <Text>Cargando...</Text>;
  }
  if (error) {
      return <Text>Error al cargar la API</Text>;
  }
      // Función para formatear la fecha en formato chileno
      const formatFechaChilena = (fecha) => {
        const date = new Date(fecha);
        if (isNaN(date.getTime())) {
            console.error("Fecha inválida:", fecha);
            return "Fecha inválida";
        }
        return date.toLocaleDateString('es-CL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    // Función para manejar el clic en el botón "Convertir"
    const manejarFechaActualizacion = () => {
      if (monedaSeleccionada) {
          // Busca la cotización seleccionada por su código
          const moneda = cotizaciones.find(c => c.moneda === monedaSeleccionada);
          
          
          
          if (moneda) {
              // Establece la fecha de actualización formateada
              setFechaActualizacion(formatFechaChilena(moneda.fechaActualizacion));
              // Llama a la función de conversión para calcular el resultado
              convertirMoneda();
              setUltimoCierre(moneda.venta);
          } else {
              console.log("No se encontró la moneda seleccionada en las cotizaciones.");
          }
      }
  };

  return (
    // Añade un View para contener los elementos
    <View>

        {/* Componentes Verdaderos para interactuar y mostrar datos de la API. */}
        <Subtitulos parametro={"Cantidad"}/>
        <View style={styles.container}>

            <Image source={dolar} style={styles.iconDolar} />
            <TextInput
                style={styles.input}
                value={cantidad} // Vincula el valor al estado
                onChangeText={handleInputChange} // Actualiza el estado cada vez que el texto cambia
                placeholder='Cantidad'
                keyboardType='numeric'
            />

            <Picker
              selectedValue={ monedaSeleccionada } // Vincula el valor al estado
              style={styles.picker}
              onValueChange={handleSelectChange}
            >
                <Picker.Item label="ARS" value="ARS" color='blue' />
                <Picker.Item label="USD" value="USD" color='blue'/>
                <Picker.Item label="EUR" value="EUR" color='blue'/>
                <Picker.Item label="BRL" value="BRL" color='blue'/>
                <Picker.Item label="UYU" value="UYU" color='blue'/>
            </Picker>
        </View>
        {/* Componentes Verdaderos para interactuar y mostrar datos de la API. */}

        {/* Estos son componentes falsos para mostrar las conversiones. */}
        <Subtitulos parametro={"Convertido a"}/>
        <View style={styles.container}>

            <Image source={dolar} style={styles.IconDolarFalse} />
            <TextInput
                style={styles.inputFalse}
                value={resultado} // Vincula el valor al estado
                placeholder='Convertido a'
                editable={false}

            />
            <Text style={styles.pickerFalse}>CLP</Text>

        </View>
        {/* Estos son componentes falsos para mostrar las conversiones. */}

  
        {/* Ultimo Cierre y Boton convertir. */}
        <Text>
          {"\n"}
        </Text>
        <Subtitulos parametro={"Último Cierre"} />

        <View style={styles.UltimoCierreBoton}>

          {/* Texto de Ultimo Cierre del valor de la divisa. Resive un parametro de la Api en el monto. */}
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
          $ <Text style={{ color: '#26b99a' }}>{ultimoCierre}</Text> CLP
          </Text>

        {/* Boton para Convertir divisas. */}
          <TouchableOpacity 
            onPress={manejarFechaActualizacion} 
            style={[styles.BotonConvertir, { borderRadius: 18 }]} 
          >
            <RNText style={{ color: '#228de9', fontWeight: 'bold', textAlign: 'center' }}>Convertir</RNText>
          </TouchableOpacity>

        </View>

        {/* Ultimo Cierre y Boton Convertir. */}

        {/* Fecha de Actualización. */}
        <Subtitulos parametro={"Fecha de Actualización"} />

        <View style={styles.UltimoCierreBoton}>

          {/* Fecha Actualización del valor de la divisa. Resive un parametro de la Api en el monto. */}
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
          <Text style={{ color: '#26b99a' }}>{fechaActualizacion}</Text>
          </Text>

        </View>
        {/* Fecha de Actualización. */}

    </View>

    
  );
}


//Estilos
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 20,
    flexDirection: 'row', 
  },
  
  input: {
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    width: '40%', 
    paddingLeft: 10,
    borderRadius: 5,
    marginLeft: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    
  },
  text: {
    marginBottom: 0, 
    fontSize: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  picker: {
    height: 50, 
    width: '31%', 
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 5, 
    
    
    alignSelf: 'center',  // Centra el Picker
    color: 'black',  // Color de texto para los items
    paddingVertical: 10,
  },

  pickerFalse: {
    width: '50%', 
    fontSize: 16,
    marginLeft: 18, 
    
    
  },
  inputFalse: {
    height: 56,
    borderColor: 'transparent',
    borderWidth: 1,
    width: '40%', 
    marginLeft: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    
  },

  IconDolarFalse: {
    marginLeft: 90, 
    width: 40,  
    height: 40, 
    resizeMode: 'contain', 
  },

  iconDolar: {
    width: 40,  
    height: 40, 
    resizeMode: 'contain', 
    marginHorizontal: 3,
},

BotonConvertir: {
  width: '36%',
  height: 55,
  borderColor: '#228de9', // Color del borde
  alignItems: 'center', // Alinear elementos al centro
  justifyContent: 'center', // Alinear elementos al centro
  borderWidth: 2, // Grosor del borde
  padding: 10,
  backgroundColor: 'transparent', // Fondo transparente
},

UltimoCierreBoton: {
  borderWidth: 2,
  borderColor: 'transparent',
  borderRadius: 15,
  alignItems: 'center', 
  marginTop: 10,
  margin: 20,
  flexDirection: 'row', 
  height: 55,
  justifyContent: 'space-between'
},


});
