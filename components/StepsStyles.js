import { StyleSheet } from "react-native";

const StepsStyles = StyleSheet.create({
    Carrusel: {
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'black',
        width: 335,
        height: 200,
        marginTop: 20,
        marginHorizontal: 10,
        padding: 20,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center',    // Centra horizontalmente
        shadowColor: "black",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 4, 


    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center", // Centra el texto horizontalmente
        marginBottom: 10,
        
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 5,
    },
});

export default StepsStyles;
