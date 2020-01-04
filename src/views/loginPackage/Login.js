import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Login extends Component {
    render() {
        return (
            <View style={{
                flex: 1, alignItems: "center",
                justifyContent: "center",
            }}>
                <Text>It will be the login screen</Text>
                <Button onPress={() => this.props.navigation.navigate('App')}
                    title='Go to menu'
                ></Button>
            </View>
        )
    }
} 