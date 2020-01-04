import React, { Component } from "react";
import {
  Dimensions,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import PropTypes from "prop-types";
import styles from "./styles";
import Block from "../../components/Block";
import Typography from "../../components/Typography";

const { height } = Dimensions.get("screen");

const CARD_HEIGHT = height / 4 + 10;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapCustom extends Component {
  state = {
    region: {
      latitude: 52.4508157,
      longitude: 16.9131945,
      latitudeDelta:0.0622,
      longitudeDelta:0.0221
    }
  };
  
  static navigationOptions = {
    title: "Map View Of Places",
    headerStyle: styles.containerHeader,
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.props.pointsCoordinates.length) {
        index = this.props.pointsCoordinates.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinates } = this.props.pointsCoordinates[index];
          this.map.animateToRegion(
            {
              ...coordinates,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    
    if (true) {
      return (
        <View style={styles.container}>
          <MapView
            showsUserLocation
            ref={map => (this.map = map)}
            style={styles.container}
            initialRegion={this.state.region}
          >
            {this.props.pointsCoordinates.map((marker, _id) => {
              return (
                <MapView.Marker
                  key={marker._id}
                  coordinate={marker.coordinates}
                  title={marker.name}
                >
                </MapView.Marker>
              );
            })}
          </MapView>
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.animation
                    }
                  }
                }
              ],
              { useNativeDriver: true }
            )}
            style={styles.scrollView}
            contentContainerStyle={styles.endPadding}
          >
            {this.props.pointsCoordinates.map((marker, _id) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("PlaceContainer", {idBar: marker._id})}
              >
                <Block style={styles.card} key={marker._id}>
                  <Image
                    source={require('../../../src/assets/images/bars/Pacza.jpg')} 
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  <Block style={styles.textContent}>
                    <Typography
                      center
                      numberOfLines={1}
                      style={styles.cardtitle}
                    >
                      {marker.name.toString()}
                    </Typography>
                  </Block>
                </Block>
              </TouchableOpacity>
            ))}
          </Animated.ScrollView>
        </View>
      );
    }
  }
}


MapCustom.PropTypes = {
  pointsCoordinates: PropTypes.array,
};


