import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator,Text } from "react-native";
import CouponsCustom from "./CouponsCustom";
import {fetchData} from "../../global/actions/mapAction/globalAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

let URL ='https://alko-app.herokuapp.com/api/coupons/'

class CouponsContainer extends Component {

  componentDidMount() {
    this.props.fetchData( URL , 'couponsContainer');
  }

  render() {
    let content = <CouponsCustom dataBarCoupons={this.props.dataServer.dataCoupons} navigation={this.props.navigation}/>;
    if (this.props.dataServer.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return( <View style={styles.container}>{content}</View>);
  }
}

CouponsContainer.propTypes = {
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
    dataServer: state,
  };
};

export default connect(
  mapStateToProps,
  {fetchData}
)(CouponsContainer);
