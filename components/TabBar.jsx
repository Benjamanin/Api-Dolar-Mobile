import { View, Text, TouchableOpacity, StyleSheet } from "react-native"; // Importación corregida
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabBar({ state, descriptors, navigation }) {

    const icons = {
        index: (props) => <AntDesign name="home" size={26} color={greyColor} {...props}/>,
        ayuda: (props) => <Ionicons name="help" size={26} color="black"  {...props}/>,
    }

    const primaryColor = '#0891b2';
    const greyColor = '#737373';

  return (

    <View 
    style={styles.tabbar}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        // Evitar mostrar pestañas no deseadas
        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name} 
            style = {styles.tabbatItems}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            
          >
            {
                icons[route.name]({
                    color: isFocused ? primaryColor : greyColor
                })
            }

            <Text style={{ color: isFocused ? primaryColor : greyColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 4, 
  },
  tabbatItems: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
