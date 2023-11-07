import React, { Component } from "react";
import { View } from "react-native";

class Separator extends Component {
  render() {
    return <View style={{ height: this.props.height }}></View>;
  }
}

export default Separator;
