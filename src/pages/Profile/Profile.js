import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile</Text>
        <Text>Email : {this.props.globalState.dataUser.email}</Text>
        <Text>Password : {this.props.globalState.dataUser.password}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  globalState: state,
});

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({});
