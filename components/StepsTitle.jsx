import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StepsTitle() {
    return (
        <View
        style={styles.container}
        >
            <Text style = {styles.text} >Pasos para convertir una divisa</Text>

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