import { View } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import Titulo from '../components/titulo';
import Cambio from '../components/cambio';
import Banderas from '../components/banderas';


export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [cotizaciones, setCotizaciones] = useState([]);
  const [monedaSeleccionada, setMonedaSeleccionada] = useState('ARS');
  const [cantidad, setCantidad] = useState('1');
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    fetch("https://cl.dolarapi.com/v1/cotizaciones")
        .then(res => res.json())
        .then(data => {
            setData(data);
            setError(null);
            setCotizaciones(data);
        })
        .catch(err => {
            setError(err);
            setData(null);
        });
  }, []);

  
  const handleSelectChange = (value) => {
    setMonedaSeleccionada(value);
  };
  const handleInputChange = (value) => {
      setCantidad(value);
  }


const convertirMoneda = () => {
    if (monedaSeleccionada && cantidad) {
        
        const moneda = cotizaciones.find(c => c.moneda === monedaSeleccionada);

        if (moneda) {
          let conversion;
    
          // Si la moneda seleccionada es Euro (EUR), multiplica el valor por 1000
          if (monedaSeleccionada === 'EUR') {
            conversion = parseFloat(cantidad) * moneda.venta * 1000;
          } else {
            conversion = parseFloat(cantidad) * moneda.venta;
          }
    
          setResultado(conversion.toFixed(2));
        }
    }
};


  return (
    <View> 
      
        <Titulo 
          monedaSeleccionada={monedaSeleccionada || ''}
        />

        <Banderas 
          monedaSeleccionada={monedaSeleccionada || ''}
        />

        <Cambio 
          data={data}
          error={error}
          cotizaciones={cotizaciones}
          monedaSeleccionada={monedaSeleccionada}
          cantidad={cantidad}
          resultado={resultado}
          handleSelectChange={handleSelectChange}
          handleInputChange={handleInputChange}
          convertirMoneda={convertirMoneda}
        />
    </View>
  );
}
