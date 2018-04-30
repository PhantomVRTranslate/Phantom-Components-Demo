import React from "react";
import {
  AppRegistry,
  asset,
  NativeModules,
  VrButton,
  Pano,
  Text,
  View
} from "react-vr";

import App from "./components/app";
import Title from "./components/title";
import ContentPlane from "./components/ContentPlane.js";
import { backgroundImage } from "./helperFiles/styleSheet.js";
import Navbar from "./components/navbar/Navbar.js";

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();

    this.state = {
      enterScene: false,
    };

    this.activateScene = this.activateScene.bind(this);
  }

  activateScene() {
    this.setState({ enterScene: true });
  }

  render() {
    return (
      <View>
        {/* <Pano source={{uri: 'https://c1.staticflickr.com/1/818/27568453618_37132d75e8_o.jpg'}}/> */}
        <Title
          title='Baja Mexico'
          activateScene={this.activateScene}
          titleStyling={{
            color: '#155e3d',
            fontSize: .8,
          }}
          progressWidth={1}
          progressColor="#a8fff1"
          startText='Welcomes You!'
          startTextStyling={{
            color: '#8ef5e4'
          }} />
        { this.state.enterScene ? <App /> : <View /> }
      </View>
    );

  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
