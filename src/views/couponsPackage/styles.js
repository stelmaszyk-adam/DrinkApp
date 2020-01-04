import { StyleSheet, Dimensions } from "react-native";
import * as theme from '../../global/constants/theme';

const { width } = Dimensions.get("screen");

export default  styles = StyleSheet.create({
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