import React, { useState } from 'react'; 
import { View, TextInput, StyleSheet, Text, Image, Button, TouchableOpacity, Text as RNText } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Subtitulos from './Subtitulos';
import dolar from '../icons/dolar.png';

export default function Cambio() {
  const [text, setText] = useState(''); // Para controlar el texto ingresado
  const [selectedValue, setSelectedValue] = useState("java"); // Usado para controlar el valor seleccionado en el Picker
  const handlePress = () => {
    alert('¡Hola!');
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
                value={text} // Vincula el valor al estado
                onChangeText={setText} // Actualiza el estado cada vez que el texto cambia
                placeholder='Cantidad'
            />

            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="CLP" value="java" />
                <Picker.Item label="ARG" value="javascript" />
                <Picker.Item label="USD" value="python" />
                <Picker.Item label="UYU" value="ruby" />
            </Picker>
        </View>
        {/* Componentes Verdaderos para interactuar y mostrar datos de la API. */}

        {/* Estos son componentes falsos para mostrar las conversiones. */}
        <Subtitulos parametro={"Convertido a"}/>
        <View style={styles.container}>

            <Image source={dolar} style={styles.IconDolarFalse} />
            <TextInput
                style={styles.inputFalse}
                value={text} // Vincula el valor al estado
                onChangeText={setText} // Actualiza el estado cada vez que el texto cambia
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
          $ <Text style={{ color: '#26b99a' }}>76567</Text> CLP
          </Text>

        {/* Boton para Convertir divisas. */}
          <TouchableOpacity 
            onPress={handlePress} 
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
          $ <Text style={{ color: '#26b99a' }}>76567</Text> CLP
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
