
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Subtitulos({parametro}) {
    return (
        <View
        style={styles.container}
        >
            <Text style = {styles.text} >{parametro}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: -10,
      marginHorizontal: 20,
      marginBottom: -4,
      
    },
    text: {
      fontSize: 18,
      color: 'black',
      //negrita
      fontWeight: 'bold',
    },
  });