import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Texto() {
    return (
        <View
        style={styles.container}
        >

            <Text>Texto</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: 'black',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
    },
    text: {
      fontSize: 20,
    },
  });