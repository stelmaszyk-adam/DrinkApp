import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Block from "../../components/Block"

import CustomHeader from "../../components/CustomHeader"



export default class FriendsView extends Component {
    render() {
        return (
            <Block style={{ flex: 1 }}>
                {<CustomHeader navigation={this.props.navigation} />}
            </Block>
        )
    }
}

styles = StyleSheet.create({
    scroller: {
        flex: 1,
    }
});