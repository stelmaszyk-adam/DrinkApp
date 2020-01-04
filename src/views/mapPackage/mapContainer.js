import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import MapCustom from "./MapCustom";
import { fetchData } from "../../global/actions/mapAction/globalAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

let URL = 'https://alko-app.herokuapp.com/api/places'
class MapContainer extends Component {

  componentDidMount() {
    this.props.fetchData(URL, 'mapContainer');
  }

  render() {
    let content = <MapCustom pointsCoordinates={this.props.dataServer.dataServer} navigation={this.props.navigation} />;
    if (this.props.dataServer.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return (<View style={styles.container}>{content}</View>);
  }
}

MapContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  dataServer: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const mapStateToProps = state => {
  return {
    dataServer: state
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(MapContainer);
