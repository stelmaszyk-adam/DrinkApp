import React, { Component } from "react";
import { View, FlatList, Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ChallangesData } from "./challangesData"
import CustomHeader from "../../components/CustomHeader"
import Typography from "../../components/Typography";
import Block from "../../components/Block";
import Divider from '../../components/Divider';
import * as theme from '../../constants/theme';
import { ScrollView } from "react-native-gesture-handler";
import ChallangeFlatList from "../../components/ChallangeFlatList"

const { width, height } = Dimensions.get('screen')

export default class ChallangesView extends Component {
    render() {
        return (
            <Block style={{ flex: 1, }} gray>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Block style={styles.blockStyle}>
                        <Typography h2 center middle flex={1}>{'OSIĄGNIĘTE'}</Typography>
                        <Block center grey margin={[10, 0, 5, 0]} >
                            <FlatList
                                horizontal
                                scrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={ChallangesData[0].images}
                                keyExtractor={(item, index) => `${index}`}
                                renderItem={({ item, index }) => (
                                    <Block
                                        style={{
                                            width: width / 8,
                                            height: height / 13,
                                            backgroundColor: 'rgba(0,0,50,0.6)',
                                            alignItems: 'center',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 10,
                                            borderRadius: width / 30,
                                            borderWidth: 3,
                                            borderColor: "#000000",
                                        }}>
                                        <Image
                                            source={item.image}
                                            resizeMode="contain"
                                            style={styles.photoContainer}
                                        />
                                    </Block>
                                )}
                            />
                        </Block>
                        <Block center grey margin={[10, 0, 5, 0]} >
                            <FlatList
                                horizontal
                                scrollEnabled
                                showsHorizontalScrollIndicator={false}
                                data={ChallangesData[0].images}
                                keyExtractor={(item, index) => `${index}`}
                                renderItem={({ item, index }) => (
                                    <Block
                                        style={{
                                            width: width / 8,
                                            height: height / 13,
                                            backgroundColor: 'rgba(0,0,50,0.6)',
                                            // justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 10,
                                            borderRadius: width / 30,
                                            borderWidth: 3,
                                            borderColor: "#000000",
                                        }}>
                                        <Image
                                            source={item.image}
                                            resizeMode="contain"
                                            // resizeMode="cover"
                                            style={styles.photoContainer}
                                        />
                                    </Block>
                                )}
                            />
                        </Block>

                    </Block>
                    <Divider margin={[theme.sizes.padding * 0.2, 0]} style={{ height: 4, marginLeft: 10, marginRight: 10 }} />

                    <Block style={styles.blockStyle}>
                        <Typography h2 center middle flex={1} >{ChallangesData[0].mainName}</Typography>
                        <ChallangeFlatList colorBackground={'rgba(0,0,50,0.6)'} images={ChallangesData[0].images} />
                    </Block>
                    <Divider margin={[theme.sizes.padding * 0.2, 0]} style={{ height: 4, marginLeft: 10, marginRight: 10 }} />

                    <Block style={styles.blockStyle} >
                        <Typography h2 center middle flex={1} >{ChallangesData[1].mainName}</Typography>
                        <ChallangeFlatList colorBackground={'rgba(209,177,47,1)'} images={ChallangesData[1].images} />
                    </Block>
                    <Divider margin={[theme.sizes.padding * 0.2, 0]} style={{ height: 4, marginLeft: 10, marginRight: 10 }} />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewChallange')}>
                        <Block style={styles.blockStyle}>
                            <Typography h2 center middle flex={1} >{ChallangesData[2].mainName}</Typography>

                            <ChallangeFlatList colorBackground={'rgba(66,196,209,0.6)'} images={ChallangesData[2].images} />

                        </Block>
                    </TouchableOpacity>

                </ScrollView>
            </Block>
        )
    }
}


export const styles = StyleSheet.create({
    blockStyle: {
        height: 200,
        margin: 5,
        backgroundColor: "#ffffff",
    },
    photoContainer: {
        width: width / 10, height: height / 15,
        marginBottom: 10,


    },

})