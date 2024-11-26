import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const Bodystyles = StyleSheet.create({
    container: {
        flexDirection: "column", 
        borderWidth: 0.46,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    containerQuantity:{
        borderWidth: 0.46,
        borderRadius: 10,
    },
    texto:{
        marginTop: 5,
        marginLeft: 5,
        color: "gray",
        fontWeight: "bold",
    },
    textinput:{
        height: 50,
    },
    containerDropdown:{
        marginTop: 20,
        borderWidth: 0.46,
        borderRadius: 10,
    },
    Dropdown:{
        height: 75,
        borderWidth: 0.46,
        borderRadius: 10,
        textAlign: "center",
    },
});
export default Bodystyles;