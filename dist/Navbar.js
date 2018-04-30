import React from "react";
import { View, Animated, asset, Image, Text, VrButton } from "react-vr";
import { Easing } from "react-native";

import NavbarItem from "./NavbarItem.js";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    console.log('hi');
    
    this.state = { 
      slideForward: new Animated.Value(-5), 
      slideUp: new Animated.Value(-4),
      fadeIn: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideForward,
          {
           toValue: -1.5,
           duration: 3000,
           easing: Easing.bezier(.5,.34,.3,.88)
          }
        ),
        Animated.timing(
          this.state.slideUp,
          {
           toValue: -1,
           duration: 3000,
           easing: Easing.bezier(.5,.34,.3,.88)
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: .8,
           duration: 4000,
           easing: Easing.linear
          }
        )
      ])
    ]).start();
  }

  render() {
    const { content, changePage, page, navbarStyle, linkStyle, linkBgColor, linkSelectedColor, progressColor, progressDisabled } = this.props;

    const currPage = page;

    const defaultNavbarStyle = {
      opacity: this.state.fadeIn,
      borderWidth: 0.002,
      borderColor: "#444",
      padding: .02,
      margin: .02,
      height: 0.3,
      layoutOrigin: [0.5, 0.5],
      transform: [{ translate: [0, this.state.slideUp, this.state.slideForward] }, { rotateX: "-45deg" }],
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    };

    const mergedNavbarStyle = Object.assign({}, defaultNavbarStyle, navbarStyle);

    return (
      <Animated.View
        style={mergedNavbarStyle}
      >
        {content.map((el, idx) => (
        <NavbarItem 
          changePage={changePage} 
          currPage={currPage}
          link={el.link} 
          key={idx}
          linkBgColor={linkBgColor}
          linkSelectedColor={linkSelectedColor}
          linkStyle={linkStyle}
          progressColor={progressColor}
          progressDisabled={progressDisabled}
          >
            {el.label}
          </NavbarItem>)
        )}
      </Animated.View>
    );
  }
}
