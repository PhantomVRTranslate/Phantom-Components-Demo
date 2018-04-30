import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import {
  Gallery,
  GalleryItem,
  Carousel,
  TextCard
} from 'phantom_components';

export default class Page2 extends React.Component {
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
            "https://s3.amazonaws.com/project-phantom/graywhalefluke.jpg",
            "https://s3.amazonaws.com/project-phantom/DSC_0098.JPG",
            "https://s3.amazonaws.com/project-phantom/DSC_0132.JPG",
            "https://s3.amazonaws.com/project-phantom/DSC_0303.JPG",
            "https://s3.amazonaws.com/project-phantom/DSC_0450.JPG",
            "https://s3.amazonaws.com/project-phantom/DSC_0336.JPG"
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
        <Gallery>
          <GalleryItem
            type="image"
            src="https://s3.amazonaws.com/project-phantom/DSC_0471.JPG"
          />
          <GalleryItem
            type="image"
            src="https://s3.amazonaws.com/project-phantom/DSC_0280.JPG"
          />
        </Gallery>

        <TextCard flex={2}>
          Every winter, hundreds of Pacific gray whales return to their
          traditional breeding and birthing grounds in sheltered San Ignacio
          Lagoon on Mexico’s Baja Peninsula. Friendly and engaging, they are
          often intrigued with humans, swimming right up to our open boats.
        </TextCard>
      </Animated.View>
    );
  }
}
