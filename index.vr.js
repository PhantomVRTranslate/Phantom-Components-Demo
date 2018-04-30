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

import App from "./dist/app";

import {
  Title
} from 'phantom_components';

import { backgroundImage } from './helperFiles/styleSheet';

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
        <Pano source={{uri: backgroundImage}}/>
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
