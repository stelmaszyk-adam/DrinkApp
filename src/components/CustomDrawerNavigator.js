import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItems } from "react-navigation";

const CustomDrawerNavigator = props => {
    return (
        <View style={styles.container}>
            <DrawerItems
                activeBackgroundColor={"black"}
                activeTintColor={"white"}
                {...props}
            />
        </View>
    )
};

export default CustomDrawerNavigator; // i am not sure

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1
    },

    icons: {
        width: 30
    }
});

