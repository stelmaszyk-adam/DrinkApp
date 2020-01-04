import React, { Component } from "react";
import { FlatList, Dimensions, Image, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { peopleChallange } from "./challangesData"
import Typography from "../../components/Typography";
import Block from "../../components/Block";
import MyImage from '../../components/MyImage';
import { TextInput } from "react-native-gesture-handler";
import alcholic from "../../assets/icons/challanges/alcoholic.png"
import cup from "../../assets/icons/challanges/cup.png"
import infromation from "../../assets/icons/challanges/infromation.png"
import MyButton from "../../components/MyButton";
import { description } from "./challangesData";

const { width } = Dimensions.get('screen')

export default class ViewChallange extends Component {
    constructor(props) {
        super(props);

    }

    renderCupponModal() {
        return (
            <Modal
                transparent
                isVisible={false}
                onBackdropPress={() => this.setState({ isModalForItemVisible: false })}>
                <Block style={styles.wrapper}>
                    <Block style={styles.loaderContainer}>
                        <Typography center h2>{'Wprowadzać twoj nowy kupon: '}</Typography>
                        <TextInput></TextInput>
                    </Block>
                </Block>
            </Modal>
        )
    }


    render() {

        return (

            <Block style={{ flex: 1, marginTop: 20 }} gray>
                <Block style={{ flex: 1 }} gray>
                    <Block row style={styles.blockStyle} center>
                        <Block style={{ flex: 1.5 }}>
                            <Typography h1 style={{ flex: 1, marginLeft: 10 }}>{'Alkohol Bla'}</Typography>
                            <Block row style={{ flex: 1 }}>
                                <Block style={{
                                    flex: 1,
                                    backgroundColor: 'rgba(0,0,50,0.6)',
                                    alignItems: 'center',
                                    borderWidth: 0,
                                    marginLeft: 13,
                                    marginRight: 13,
                                    borderRadius: width,
                                    borderWidth: 3,
                                    borderColor: "#000000",
                                }}>
                                    <Image source={cup} style={{
                                        tintColor: 'rgba(209,177,47,1)',
                                        flex: 1,
                                        width: 50,
                                        height: 50,
                                    }}
                                        resizeMode="contain" />
                                </Block>
                                <Block style={{

                                    flex: 1,
                                    backgroundColor: 'rgba(0,0,50,0.6)',
                                    alignItems: 'center',
                                    borderWidth: 0,
                                    marginLeft: 13,
                                    marginRight: 13,
                                    borderRadius: width,
                                    borderWidth: 3,
                                    borderColor: "#000000",
                                }}>
                                    <Image source={infromation} style={{

                                        flex: 1,
                                        width: 40,
                                        height: 40,
                                    }}
                                        resizeMode="contain" />
                                </Block>
                            </Block>
                        </Block>

                        <Block style={{

                            flex: 1,
                            backgroundColor: 'rgba(0,0,50,0.6)',
                            alignItems: 'center',
                            borderWidth: 0,
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: width / 30,
                            borderWidth: 3,
                            borderColor: "#000000",
                        }}>
                            <MyImage image={alcholic} />
                        </Block>
                    </Block>

                    <Block style={{ flex: 2.0, marginLeft: 30, marginRight: 30, marginTop: 30 }}>
                        <Typography h2 >{'Description'}</Typography>
                        <Typography h3>{description}</Typography>
                    </Block>

                    <Block row style={{ flex: 1.0, alignItems: 'center', marginLeft: 25, marginRight: 25 }}>
                        <MyButton touchableStyle={styles.buttonAccept} title={'Dodaj Kupno'} textStyle={{color: "#ffff", fontSize: 16}}/>
                        <MyButton touchableStyle={styles.buttonAccept} title={'Dodaj zdjecie'} textStyle={{color: "#ffff", fontSize: 16}} />
                    </Block>

                    <Block style={{ flex: 4.0, alignItems: 'center', }}>
                        <FlatList
                            style={{ marginTop: 15, }}
                            scrollEnabled
                            showsVerticalScrollIndicator={false}
                            data={peopleChallange.memorise}
                            keyExtractor={(item, index) => `${index}`}
                            renderItem={({ item, index }) => (
                                <Block style={{ marginTop: 10 }}>

                                    <Block>
                                        <Typography center h2 >{item.description}</Typography>
                                    </Block>

                                    <Image
                                        source={item.image}
                                        resizeMode="contain"
                                        style={{ width: width / 1.2, marginTop: 5, marginBottom: 15, borderRadius: 10, borderWidth: 5, borderColor: "#000000" }}
                                    />
                                </Block>
                            )}
                        />
                    </Block>
                </Block>
                {this.renderCupponModal()}
            </Block>
        )
    }
}


export const styles = StyleSheet.create({
    blockStyle: {
        height: 150,
        margin: 5,
        marginLeft: 25, marginRight: 25,
        backgroundColor: "#ffffff",
        flex: 1.5,
    },
    buttonAccept: {
        flex: 1,
        margin: 10,
        padding: 5,
        width: 20,
        height: 40,
        backgroundColor: 'rgba(0,0,50,0.6)',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#000000",
    },
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        margin: 10,
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
})