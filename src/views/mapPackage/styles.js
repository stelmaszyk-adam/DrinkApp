import { StyleSheet, Dimensions } from "react-native";
import * as theme from '../../global/constants/theme';

const { width, height } = Dimensions.get("screen");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = CARD_HEIGHT;

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden"
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  textContent: {
    flex: 1
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold"
  },
  cardDescription: {
    fontSize: 12,
    color: "#444"
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)"
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)"
  },
  containerHeader: {
    borderBottomWidth: 2,
    height: 70,
    paddingTop: 20
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    backgroundColor: "#4e8087",
    padding: 10
  },
  faceImageStyle: {
    width: 65,
    height: 65
  },
  cardTextStyle: {
    color: "white",
    textAlign: "left"
  },
  bar: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  },
  myStarStyle: {
    color: "yellow",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  myEmptyStarStyle: {
    color: "white"
  },
  textInput: {
    height: 80,
    paddingLeft: 6
  },
  textHeaderList: {
    marginBottom: 5
  },
  blockList: {
    marginLeft: 5
  },
  modalStyle: {
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    zIndex: 9,
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  loaderContainer: {
    width: 300,
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 15,
    position: "absolute",
    top: "30%",
    left: "20%",
    marginLeft: -45,
    marginTop: -45
  },
  photoContainer: {
    width: 100,
    height: 100,
    margin: 10
  },
  button: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});
