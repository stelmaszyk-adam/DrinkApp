import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";

import { flatListBarAndCupponsData } from "./flatListData";
import DiscountFlatList from "../../components/DiscountFlatList";
import Block from "../../components/Block";
import Divider from '../../components/Divider';
import * as theme from '../../global/constants/theme';
import PropTypes from "prop-types";

export default class CouponsCustom extends Component {

    render() {
        return (
            <Block style={{ flex: 1 }} gray>
                <FlatList                 
                    scrollEnabled
                    snapToAlignment="center"
                    data={flatListBarAndCupponsData}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item, index }) => (
                        <Block margin={[0,5,0,5]}>
                            <DiscountFlatList listData={this.props.dataBarCoupons} barName={item.barName} />
                            <Divider margin={[theme.sizes.padding * 0.2, 0]} style={{height: 4, marginLeft: 10, marginRight:10}}/>
                        </Block>
                    )}
                >
                </FlatList>
            </Block>
        )
    }
}

CouponsCustom.PropTypes = {
    dataBarCoupons: PropTypes.array,
  };