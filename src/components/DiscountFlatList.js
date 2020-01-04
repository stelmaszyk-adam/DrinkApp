import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Button, Image, FlatList, Dimensions } from 'react-native';

import Block from './Block';
import Typography from './Typography';
import * as theme from '../constants/theme';
import Divider from '../components/Divider';
import Modal from "react-native-modal";
import CountDown from 'react-native-countdown-component';
import MyButton from '../components/MyButton'


const { width, height } = Dimensions.get('screen')

export default class DiscountFlatList extends Component {

    constructor() {
        super();
        NumColor1 = Math.floor(Math.random() * 10) + 40,
            NumColor2 = Math.floor(Math.random() * 8) + 2,

            this.state = {
                NumColor: NumColor1.toString(),
                isModalForItemVisible: false,
                isModalAcceptVisible: false,
                nameOfItem: "",
                imageOfItem: null,
                totalDuration: 120,
                elementsIndex: null,
                descriptionItem: "",
            }

    }

    showCupponOfTheItem() {
        this.setState({ isModalForItemVisible: true });
    }

    async showRenderAcceptModule(singleName, singleItem, cuponsId, description) {
        const dataCoupons = await fetch('https://alko-app.herokuapp.com/api/coupons/' + cuponsId);
        const dataCouponsJson = await dataCoupons.json();
        this.setState({ isModalAcceptVisible: true, nameOfItem: dataCouponsJson.title, imageOfItem: dataCouponsJson.imgUrl, elementsIndex: cuponsId, descriptionItem: dataCouponsJson.description });
    }

    deleteFromList = () => {
        const deletingRow = this.state.elementsIndex;
        this.props.listData.splice(this.state.elementsIndex, 1);
    }

    renderAcceptModule() {
        const { animationType, isModalAcceptVisible, nameOfItem, imageOfItem, descriptionItem } = this.state;
        return (
            <Modal
                animationType={animationType}
                transparent
                isVisible={isModalAcceptVisible}
                onBackdropPress={() => this.setState({ isModalAcceptVisible: false })}
            >
                <Block style={styles.wrapper}>
                    <Block style={styles.loaderContainer}>
                        <Block flex={3} row center middle margin={30}>
                            <Image
                                source={{ uri: imageOfItem }}
                                resizeMode="contain"
                                style={{ width: width / 5, height: height / 5, flex: 1, marginRight: 15 }}
                            />
                            <Block style={{ flex: 3 }}>
                                <Typography center normal bold h3 style={{ flex: 1 }}>{'Opis: '} </Typography>
                                <Typography style={{ flex: 4 }}>{descriptionItem}</Typography>
                            </Block>

                        </Block>
                        <Block flex={1} row middle >
                            <MyButton title={'TAK'} touchableStyle={styles.buttonAccept} onPress={() => {
                                this.setState({ isModalAcceptVisible: false });
                                this.showCupponOfTheItem();
                            }} />
                            <MyButton title={'NIE'} touchableStyle={styles.buttonAccept} onPress={() => {
                                this.setState({ isModalAcceptVisible: false });
                            }} />
                        </Block>
                    </Block>
                </Block>
            </Modal>
        )
    }


    renderModal() {
        const { animationType, isModalForItemVisible, nameOfItem, imageOfItem, elementsIndex } = this.state;
        return (
            <Modal
                animationType={animationType}
                transparent
                isVisible={isModalForItemVisible}
                onBackdropPress={() => this.setState({ isModalForItemVisible: false })}
            >
                <Block style={styles.wrapper}>
                    <Block style={styles.loaderContainer}>
                        <Block center>
                            <Image
                                source={{ uri: imageOfItem }}
                                resizeMode="contain"
                                style={styles.photoContainer}
                            />
                            <Typography h3 normal>{nameOfItem}</Typography>
                            <CountDown
                                until={this.state.totalDuration}
                                //duration of countdown in seconds
                                timeToShow={['M', 'S']}
                                //formate to show
                                onFinish={() => {
                                    this.deleteFromList();
                                    this.setState({ isModalForItemVisible: false });
                                }}
                                //on Finish call
                                size={20}
                            />
                            <Divider margin={[theme.sizes.padding * 0.3, 0]} />
                            <Button style={styles.button} title={'Finish'} onPress={() => {
                                this.deleteFromList();
                                this.setState({ isModalForItemVisible: false });
                            }}>
                            </Button>
                        </Block>
                    </Block>
                </Block>
            </Modal>
        )
    }

    render() {
        const {
            listData,
            barName,
        } = this.props;

        return (
            <Block center grey margin={[10, 0, 5, 0]} >
                <Typography center h1 padding={10} style={{ marginBottom: 10, width: width - 40, borderRadius: 10, borderWidth: 3, borderColor: "#000000", }}>{barName}</Typography>
                <FlatList
                    horizontal
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    data={listData}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => this.showRenderAcceptModule(item.title, item.imgUrl, item._id, item.description)}>
                            <Block style={{
                                width: width / 2, height: height / 4.5, borderRadius: 10, borderWidth: 3, borderColor: "#000000", backgroundColor: 'rgba(0,0,50,0.6)',
                                justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10, marginRight: 20, marginLeft: 20,
                            }}>
                                <Image
                                    source={{ uri: item.imgUrl }}
                                    resizeMode="contain"
                                    style={{ width: width / 5, height: height / 5, }}
                                />

                            </Block>
                            <Typography center h2 bold >{item.title}</Typography>
                        </TouchableOpacity>
                    )}
                />
                {this.renderAcceptModule()}
                {this.renderModal()}
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        paddingHorizontal: theme.sizes.base * 2,
        paddingVertical: theme.sizes.padding,
    },
    tag: {
        borderColor: theme.colors.gray2,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: theme.sizes.base,
        paddingHorizontal: theme.sizes.base,
        paddingVertical: theme.sizes.base / 2.5,
        marginRight: theme.sizes.base * 0.625,
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: theme.sizes.base,
    },
    more: {
        width: 55,
        height: 55,
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    },
    textInput: {
        height: 80,
        paddingLeft: 6,
    },
    textHeaderList: {
        marginBottom: 5,
    },
    blockList: {
        marginLeft: 5,
    },
    modalStyle: {
        alignItems: "center",
        justifyContent: "center",

    },
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    loaderContainer: {
        width: 300,
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 15,
        position: 'absolute',
        top: "30%",
        left: "20%",
        marginLeft: -45,
        marginTop: -45,
    },
    photoContainer: {
        width: 100,
        height: 100,
        margin: 10,

    },
    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 3,
    },
    buttonAccept: {
        flex: 1,
        margin: 10,
        padding: 5,
        width: 20,
        height: 30,
        backgroundColor: '#E6B40E',
    }
})