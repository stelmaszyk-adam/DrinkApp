import React, { Component } from "react";
import { Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import Block from "../../components/Block";
import Typography from "../../components/Typography";
import { imageData, partyImage } from "./settingsData";
import { editImage } from "./settingsData";
import { friendsImage } from "./settingsData";
import { achivmentsImage, textsArrow } from "./settingsData";

import ImageButton from "../../components/ImageButton";
import Modal from "react-native-modal";

const { height } = Dimensions.get('screen')

const CARD_HEIGHT = height / 8;
const CARD_WIDTH = CARD_HEIGHT - 50;
export default class SettingsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }
    openRenderKayboard() {

    }
    renderKayboard() {
        return (
            <Modal
                transparent
                isVisible={this.state.modalVisible}
            >
                <Block style={styles.loaderContainer}>
                    <Block row style={{ flex: 1 }}>
                        <TextInput
                            multiline={true}
                            autoFocus={true}
                            style={{ borderColor: "#00000", borderBottomWidth: 2, flex: 5, height: 60 }}>
                            TExt
                        </TextInput>
                        <Block style={{ flex: 1 }}>
                            <ImageButton
                                touchableStyle={styles.imageTextButton}
                                imageStyle={styles.imageTextButton}
                                sourceImage={textsArrow}
                                style={{ flex: 1 }} />
                            <ImageButton
                                touchableStyle={styles.imageTextButton}
                                imageStyle={styles.imageTextButton}
                                sourceImage={textsArrow}
                                style={{ flex: 1 }} />
                        </Block>
                    </Block>

                </Block>
            </Modal>
        )
    }

    render() {
        return (
            <Block style={{ flex: 1, margin: 10, }}>
                <Block style={{ flex: 2.5, alignItems: "center", marginBottom: 20 }}>
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={imageData[0].image} />
                </Block>
                <Block style={{ flex: 0.5, }}>
                    <Typography center h2 style={{ flex: 1, }}>{'Adam Stelmaszyk'}</Typography>
                </Block>
                <Block row style={{ flex: 1.5, }}>
                    <ImageButton touchableStyle={styles.buttonAccept} imageStyle={styles.imageButton} sourceImage={editImage} />
                    <ImageButton touchableStyle={styles.buttonAccept} imageStyle={styles.imageButton} sourceImage={friendsImage} />
                    <ImageButton touchableStyle={styles.buttonAccept} imageStyle={styles.imageButton} sourceImage={partyImage} />
                    <ImageButton touchableStyle={styles.buttonAccept} imageStyle={styles.imageButton} sourceImage={achivmentsImage} />
                </Block>
                <Block style={{ flex: 1.5, marginHorizontal: 15, }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ modalVisible: true })}>
                        <Typography h2 style={{ flex: 1, }}>{'Opis: '}</Typography>
                        <Typography h3 style={{ flex: 2, width: this.width }}>{imageData[0].description}</Typography>
                    </TouchableOpacity>
                </Block>
                <Block row style={{ flex: 1 }}>
                    <ImageButton touchableStyle={styles.buttonAchivment} imageStyle={styles.imageAchivment} sourceImage={editImage} />
                    <ImageButton touchableStyle={styles.buttonAchivment} imageStyle={styles.imageAchivment} sourceImage={achivmentsImage} />
                    <ImageButton touchableStyle={styles.buttonAchivment} imageStyle={styles.imageAchivment} sourceImage={friendsImage} />
                    <ImageButton touchableStyle={styles.buttonAchivment} imageStyle={styles.imageAchivment} sourceImage={editImage} />
                    <ImageButton touchableStyle={styles.buttonAchivment} imageStyle={styles.imageAchivment} sourceImage={achivmentsImage} />
                    <ImageButton touchableStyle={styles.buttonAchivment} imageStyle={styles.imageAchivment} sourceImage={friendsImage} />
                </Block>
                <Block style={{ flex: 1.5, backgroundColor: "#eeed12" }}>
                </Block>

                {this.renderKayboard()}
            </Block >
        )
    }
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 200,
        width: 160,
        marginTop: 20,
        borderRadius: 100,
        borderColor: "#000000",
        borderWidth: 2,
    },
    textDescription: {
        flex: 1
    },
    buttonAccept: {
        flex: 1,
        margin: 15,
        padding: 15,
        height: CARD_HEIGHT - 30,
        backgroundColor: '#E6B40E',
        // backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#000000",
    },
    imageButton: {
        flex: 1,
        height: 45,
        width: 45,
    },
    buttonAchivment: {
        flex: 1,
        margin: 10,
        padding: 5,
        height: CARD_HEIGHT / 2,
        // backgroundColor: '#E6B40E',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#000000",
    },
    buttonEvent: {
        flex: 1,
        height: CARD_HEIGHT / 2,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#000000",
    },
    imageAchivment: {
        flex: 1,
        height: 25,
        width: 25,
    },
    imageTextButton: {
        flex: 1,
        justifyContent: 'center',
        height: 40,
        width: 40,

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