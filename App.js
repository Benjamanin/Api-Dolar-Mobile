import { StatusBar } from 'expo-status-bar';
import { FlatList, View } from 'react-native';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

const data =[
  { id: '1', Component: Header },
  { id: '2', Component: Body },
  { id: '3', Component: Footer },
]

export default function App() {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <item.Component />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

