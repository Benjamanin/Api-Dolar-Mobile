import { StyleSheet } from "react-native";

const Footerstyles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
      },
      description: {
        fontSize: 16,
        marginTop: 10,
      },
      item: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        height: 150,
        padding: 20,
        marginHorizontal: 10,
      },
      subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
      },
      Carrusel:
      {
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'black',
        width: 335,
        height: 200,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginHorizontal: 10,
        padding: 20,  
        justifyContent: 'center',    
        alignContent: 'center',
        alignItems: 'center',
      },
});
export default Footerstyles;