import React, { Component } from 'react';
import { TouchableOpacity, Button, Image, FlatList, Dimensions } from 'react-native';

import Block from './Block';
import Typography from './Typography';
import * as theme from '../constants/theme';
import Divider from '../components/Divider';
import Modal from "react-native-modal";
import CountDown from 'react-native-countdown-component';
import MyButton from '../components/MyButton'

let URL = 'https://alko-app.herokuapp.com/api/coupons/'

const { width, height } = Dimensions.get('screen')

class CouponsFlatListCustom extends Component {

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

    showRenderAcceptModule(cuponsId) {
        const dataCoupons = await fetch(URL + cuponsId);
        const dataCouponsJson = await dataCoupons.json();
        this.setState({ isModalAcceptVisible: true, nameOfItem: dataCouponsJson.title, imageOfItem: dataCouponsJson.imgUrl, elementsIndex: cuponsId, descriptionItem: dataCouponsJson.description });
    }

    deleteFromList = () => {
        const deletingRow = this.state.elementsIndex;
        this.props.listData.splice(this.state.elementsIndex, 1);
    }

    renderAcceptModule() {
        const { animationType, isModalAcceptVisible, imageOfItem, descriptionItem } = this.state;
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
                        <TouchableOpacity onPress={() => this.showRenderAcceptModule(item.title, item.imgUrl, index, item.description)}>
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

CouponsFlatListCustom.PropTypes = {
    placeData: PropTypes.object,
}

export default CouponsFlatListCustom;