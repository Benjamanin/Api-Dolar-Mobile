import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StepsTitle() {
    return (
        <View
        style={styles.container}
        >
            <Text style = {styles.text} >Pasos para convertir una Divisa</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 11,
    },
    text: {
      fontSize: 30,
      // color: '#26b99a',
      color: 'gray', 
      //negrita
      fontWeight: 'bold',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  });