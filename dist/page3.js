import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import {
  Carousel,
  CarouselItem,
  VideoCard,
  TextCard
} from 'phantom_components';

export default class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideLeft: new Animated.Value(-1024),
      fadeIn: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.slideLeft, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.fadeIn, {
          toValue: 1,
          duration: 2000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
        })
      ])
    ]).start();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.slideLeft, {
          toValue: 1024,
          duration: 2000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.fadeIn, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear
        })
      ])
    ]).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          opacity: this.state.fadeIn,
          transform: [{ translateX: this.state.slideLeft }]
        }}
      >
        <Carousel
          flex={2}
          imageCollection={[
            "https://s3.amazonaws.com/project-phantom/DSC_0364.JPG",
            "https://s3.amazonaws.com/project-phantom/DSC_0132.JPG"
          ]}
          initialCard={0}
          type="image"
          maxTextLength={120}
          buttonStyling={{
            borderWidth: 0,
            backgroundColor: "white",
            opacity: .9
          }}
          arrowStyling={{
            color: "darkcyan"
          }}
        >test</Carousel>

        <VideoCard src="../Baja500.mp4" />

        <TextCard>
          Every year the Baja peninsula hosts the Baja 500, an adrenaline filled
          off-road truck race where hundreds of overpowered trucks scramble down
          desert roads to the finish line.
        </TextCard>
      </Animated.View>
    );
  }
}
