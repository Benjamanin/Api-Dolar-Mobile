import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Texto from '../components/texto';
import Cambio from '../components/cambio';

export default function Home() {
  return (
    <ScrollView> 
      
        <Texto />
        <Cambio />
    
    </ScrollView>
  );
}
