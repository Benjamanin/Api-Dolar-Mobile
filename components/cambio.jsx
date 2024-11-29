import React, { useState } from 'react'; 
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Cambio() {
  const [text, setText] = useState(''); // Para controlar el texto ingresado
  const [selectedValue, setSelectedValue] = useState("java"); // Usado para controlar el valor seleccionado en el Picker

  return (
    // Añade un View para contener los elementos
<View>

    {/* Componentes Verdaderos para interactuar y mostrar datos de la API. */}
    
    <View style={styles.container}>

        <Text style={styles.text}>ICO</Text>
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


    {/* Estos son componentes falsos para mostrar las conversiones. */}

    <View style={styles.container}>

        <Text style={styles.textFalse}>ICO</Text>
        <TextInput
            style={styles.inputFalse}
            value={text} // Vincula el valor al estado
            onChangeText={setText} // Actualiza el estado cada vez que el texto cambia
            placeholder='Convertido a'
            editable={false}

        />
        <Text style={styles.pickerFalse}>CLP</Text>

    </View>

</View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    alignItems: 'center', // Centra los elementos en el eje horizontal
    justifyContent: 'center', // Centra los elementos en el eje vertical
    margin: 20,
    flexDirection: 'row', // Coloca los elementos en una columna
  },
  input: {
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    width: '40%', // Puedes ajustar el tamaño según sea necesario
    paddingLeft: 10,
    borderRadius: 5,
    marginLeft: 10, // Espacio entre el TextInput y el Picker
    alignItems: 'center', // Centra los elementos en el eje horizontal
    justifyContent: 'center', // Centra los elementos en el eje vertical
    
  },
  text: {
    marginBottom: 0, // Espacio entre el texto y el TextInput
    fontSize: 20,
    alignItems: 'center', // Centra los elementos en el eje horizontal
    justifyContent: 'center', // Centra los elementos en el eje vertical
  },
  picker: {
    height: 50, // Ajusta la altura del Picker
    width: '31%', // Puedes ajustar el tamaño según sea necesario
    alignItems: 'center', // Centra los elementos en el eje horizontal
    justifyContent: 'center', // Centra los elementos en el eje vertical
    marginBottom: 5, // Espacio entre el Picker y el borde inferior
  },

  pickerFalse: {
    width: '50%', // Puedes ajustar el tamaño según sea necesario
    fontSize: 16,
    marginLeft: 13, // Espacio entre el texto y el TextInput
    
    
  },
  inputFalse: {
    height: 56,
    borderColor: 'transparent',
    borderWidth: 1,
    width: '40%', // Puedes ajustar el tamaño según sea necesario
    marginLeft: 10, // Espacio entre el TextInput y el Picker
    
    alignItems: 'center', // Centra los elementos en el eje horizontal
    justifyContent: 'center', // Centra los elementos en el eje vertical
    
  },

  textFalse: {
    marginLeft: 85, // Espacio entre el texto y el TextInput
    fontSize: 20,
    width: '10%',
  },
});
