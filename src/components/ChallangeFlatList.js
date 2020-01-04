import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, Dimensions } from 'react-native';

import Block from './Block';
import Typography from './Typography';


const { width, height } = Dimensions.get('screen')

export default class ChallangeFlatList extends Component {
    constructor(props) {
        super(props);

        state = {
            colorBackground: 'rgba(0,0,0,0.6)'
        }

    }
    render() {
        const {
            images,
            colorBackground,
        } = this.props;
        return (
            <Block center grey margin={[10, 0, 5, 0]} >
                <FlatList
                    horizontal
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item, index }) => (
                        <Block
                            style={{
                                width: width / 5,
                                height: height / 10,
                                backgroundColor: colorBackground,
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
                            <Typography normal center >{item.name}</Typography>
                        </Block>
                    )}
                />

            </Block>
        )
    }
}

const styles = StyleSheet.create({
    photoContainer: {
        width: width / 10, height: height / 10,
        marginBottom: 10,
    },
    buttonStyle: {
        width: width / 5,
        height: height / 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        borderWidth: 0,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: width / 30,
        borderWidth: 3,
        borderColor: "#000000",
    },
})