import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import {
  CarouselPage,
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
      <CarouselPage 
          // initialImage={2} 
          width={800}
          height={600}
          images={[
            "https://s3.amazonaws.com/project-phantom/graywhalefluke.jpg",
            "https://s3.us-east-2.amazonaws.com/phantom-vr-images/22075-mexico-baja-california-cabo-san-lucas-rocks-lghoz.jpg",
            "https://s3.amazonaws.com/project-phantom/DSC_0098.JPG",
            "https://s3.us-east-2.amazonaws.com/phantom-vr-images/BMW_R_1200_GS_In_Baja_Mexico-6.jpg",
            "https://s3.amazonaws.com/project-phantom/DSC_0132.JPG",
            "https://s3.us-east-2.amazonaws.com/phantom-vr-images/cancunsecrets.jpg",
            "https://s3.amazonaws.com/project-phantom/DSC_0303.JPG",
            "https://s3.us-east-2.amazonaws.com/phantom-vr-images/mex-bcs-gallery-005.jpg",
            "https://s3.amazonaws.com/project-phantom/DSC_0450.JPG",
            "https://s3.us-east-2.amazonaws.com/phantom-vr-images/exterior.jpg",
            "https://s3.amazonaws.com/project-phantom/DSC_0336.JPG",
            "https://s3.amazonaws.com/project-phantom/DSC_0471.JPG",
            "https://s3.us-east-2.amazonaws.com/phantom-vr-images/mexico-baja-whale-019.jpg",
            "https://s3.amazonaws.com/project-phantom/DSC_0280.JPG",
            "https://s3.us-east-2.amazonaws.com/phantom-vr-images/bayresort.jpg"
          ]}/>
    );
  }
}
