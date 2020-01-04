import React, { Component } from "react";
import { FlatList, StyleSheet, Dimensions } from "react-native";
import Block from "../../components/Block";
import ImageButton from "../../components/ImageButton";
import {
    rankingData, rankingCityData, cityImage, friendsImage, globalImage, partyImage, profileImage
} from "./rankingData";
import Divider from "../../components/Divider"
import * as theme from "../../constants/theme"
import Typography from "../../components/Typography";

const { height } = Dimensions.get('screen')

const CARD_HEIGHT = height / 8;
const CARD_WIDTH = CARD_HEIGHT - 50;
export default class RankingView extends Component {

    constructor() {
        super();
        this.state = {
            listData: rankingData,
        }
    }

    changeData(changesList) {
        this.setState({ listData: changesList });
    }

    render() {
        return (
            <Block style={{ flex: 1 }}>
                <Block style={{ flex: 3 }}>
                    <Block center style={{ flex: 0.5 }}>
                        <Typography h1 style={{ flex: 1, marginTop: 10 }}>{"Global"}</Typography>
                    </Block>
                    <Block style={{ flex: 4 }}>
                        <FlatList
                            scrollEnabled
                            snapToAlignment="center"
                            data={this.state.listData}
                            keyExtractor={(item, index) => `${index}`}
                            renderItem={({ item, index }) => (
                                <Block margin={[0, 5, 0, 5]}>
                                    <Block row>
                                        <Typography h2 style={{ flex: 1, marginLeft: 10 }}>{item.rankingGlobal}</Typography>
                                        <Typography h2 style={{ flex: 3, }}>{item.name}</Typography>
                                        <Typography h2 style={{ flex: 3, marginRight: 10 }}>{item.surname}</Typography>
                                        <Block style={{ flex: 1, marginRight: 10 }}>
                                            <ImageButton
                                                touchableStyle={styles.imageTextButton}
                                                imageStyle={styles.imageTextButton}
                                                sourceImage={profileImage}
                                                style={{ flex: 1 }} />
                                        </Block>
                                    </Block>
                                    <Divider margin={[theme.sizes.padding * 0.2, 0]} style={{ height: 4, marginLeft: 10, marginRight: 10 }} />
                                </Block>
                            )}
                        >
                        </FlatList>
                    </Block>
                </Block>
                <Block row style={{ flex: 0.5 }}>
                    <Block style={{ flex: 1 }}>
                        <ImageButton
                            touchableStyle={styles.imageTextButton}
                            functionToExecute={() => this.changeData(rankingData)}
                            imageStyle={styles.imageTextButton}
                            sourceImage={globalImage}
                            style={{ flex: 1 }} />
                    </Block>
                    <Block style={{ flex: 1 }}>
                        <ImageButton
                            touchableStyle={styles.imageTextButton}
                            functionToExecute={() => this.changeData(rankingCityData)}
                            imageStyle={styles.imageTextButton}
                            sourceImage={cityImage}
                            style={{ flex: 1 }} />
                    </Block>
                    <Block style={{ flex: 1 }}>
                        <ImageButton
                            touchableStyle={styles.imageTextButton}
                            functionToExecute={() => this.changeData(rankingCityData)}
                            imageStyle={styles.imageTextButton}
                            sourceImage={friendsImage}
                            style={{ flex: 1 }} />
                    </Block>
                    <Block style={{ flex: 1 }}>
                        <ImageButton
                            touchableStyle={styles.imageTextButton}
                            functionToExecute={() => this.changeData(rankingCityData)}
                            imageStyle={styles.imageTextButton}
                            sourceImage={partyImage}
                            style={{ flex: 1 }} />
                    </Block>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: 150, height: 150,
        marginTop: 20,
    },
    textDescription: {
        flex: 1
    },
    buttonAccept: {
        flex: 1,
        margin: 10,
        padding: 5,
        height: CARD_HEIGHT,
        backgroundColor: '#E6B40E',
        borderRadius: 5,
    },
    imageButton: {
        flex: 1,
        height: 75,
        width: 75,
    },
    imageTextButton: {
        flex: 1,
        justifyContent: 'center',
        height: 50,
        width: 80,
    },
    wrapper: {

        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '20%',
        top: '80%',
        left: 0,
        alignItems: 'center',
    },
    loaderContainer: {
        zIndex: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        position: 'absolute',
        width: '100%',
        height: '20%',
        top: '80%',
        left: 0,
        alignItems: 'center',
        padding: 5,
    },
})