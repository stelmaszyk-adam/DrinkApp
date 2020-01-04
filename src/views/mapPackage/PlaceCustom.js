import React from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { Dimensions, Image, FlatList, ScrollView, Button, TextInput } from "react-native";
import DiscountFlatList from "../../../src/components/DiscountFlatList";
import Typography from "../../../src/components/Typography";
import Block from "../../../src/components/Block";
import Divider from '../../../src/components/Divider';
import CountDown from 'react-native-countdown-component';
import * as mocks from '../../../src/constants/mocks';
import MyButton from "../../../src/components/MyButton";
import styles from "./styles";
import * as theme from "../../global/constants/theme"

class PlaceCustom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bar: mocks.bars[0],
            isModalForItemVisible: false,
            nameOfItem: "",
            imageOfItem: null,
            totalDuration: 120,
            indexOfCurrentElement: null,
        }

    }

    renderModal() {
        const { animationType, isModalForItemVisible, nameOfItem, imageOfItem, indexOfCurrentElement } = this.state;
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
                                source={imageOfItem}
                                resizeMode="contain"
                                style={styles.photoContainer}
                            />
                            <Typography normal>{nameOfItem}</Typography>
                            <CountDown
                                until={this.state.totalDuration}
                                //duration of countdown in seconds
                                timeToShow={['M', 'S']}
                                //formate to show
                                onFinish={() => this.setState({ isModalForItemVisible: false })}
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


    renderCuppon() {
        return (
            <Block margin={[0, 5, 0, 5]}>
                <DiscountFlatList listData={this.props.placeData.coupons} barName={this.props.placeData.name} />
                <Divider margin={[theme.sizes.padding * 0.2, 0]} style={{ height: 4, marginLeft: 10, marginRight: 10 }} />
            </Block>
        );
    }
    renderComments() {
        const { comment } = this.props;
        return (
            <FlatList
                pagingEnabled
                scrollEnabled
                showsVerticalScrollIndicator={false}
                // snapToAlignment="center"
                data={comment.comment}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item }) => (
                    <Block>
                        <Block row>
                            <Image
                                style={{ flex: 1 }}
                                source={comment.defaultPhoto}
                                resizeMode="contain"
                                style={{ width: 50, height: 50 }} />
                            <Block style={{ flex: 3 }} style={styles.blockList}>
                                <Typography normal size={11} gray style={styles.textHeaderList}>{comment.name}</Typography>
                                <Typography normal>{item}</Typography>
                            </Block>
                        </Block>
                        <Divider margin={[theme.sizes.padding * 0.2, 0]} />
                    </Block>
                )}
            />
        );
    }

    render() {
        const { bar } = this.state;

        return (
            <Block>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderCuppon()}
                    <Block style={styles.bar}>
                        <Block row >

                            <MyButton title={'Wydarzenia'} touchableStyle={{
                                flex: 1,
                                width: 20,
                                height: 40,
                                backgroundColor: 'rgba(0,0,50,0.6)',
                                borderRadius: 5,
                                borderWidth: 3,
                                borderColor: "#000000",
                            }} textStyle={{ color: "#ffff", fontSize: 18 }}></MyButton>
                        </Block>
                        <Divider margin={[theme.sizes.padding * 0.5, 0]} />
                        <Block row>
                            <Block style={{ flex: 3 }}>
                                <Typography h3>{"Opis: "}</Typography>
                                <Typography normal gray light height={22}>{this.props.placeData.description}</Typography>
                            </Block>
                        </Block>
                        <Divider margin={[theme.sizes.padding * 0.5, 0]} />
                        <Block center row paddingLeft={10}>
                            <Block row style={{ flex: 1 }}>
                                <Typography normalgray light center style={{ marginRight: 10 }}>{bar.mark}</Typography>
                                <Typography center normal>Stars</Typography>
                            </Block>

                            <Block style={{ flex: 1 }}>
                                <Typography bold normal center style={{ flex: 1 }} height={18}>{'Bar open: '}</Typography>
                                <Typography bold normal center style={{ flex: 1 }} height={18}>{bar.barOpen}</Typography>
                            </Block>


                        </Block>
                        <Divider margin={[theme.sizes.padding * 0.5, 0]} />

                        <Block>
                            <Block row margin={[theme.sizes.padding * 0.5, 0]} border center >
                                <TextInput placeholder="Komentarze" numberOfLines={5} style={styles.textInput} multiline={true} editable={true} />
                            </Block>
                            {this.renderComments()}
                        </Block>
                    </Block>
                </ScrollView>

            </Block>
        );
    }
}



PlaceCustom.PropTypes = {
    placeData: PropTypes.object,
}

PlaceCustom.defaultProps = {
    comment: mocks.comments[0],
}

export default PlaceCustom;