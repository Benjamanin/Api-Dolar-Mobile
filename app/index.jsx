import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Titulo from '../components/titulo';
import Cambio from '../components/cambio';
import Banderas from '../components/banderas';


export default function Home() {
  return (
    <View> 
      
        <Titulo />
        <Banderas />
        <Cambio />
    
    </View>
  );
}
