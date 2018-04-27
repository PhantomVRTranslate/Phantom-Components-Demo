import React from 'react';
import {
    View,
    Animated,
    asset,
    Image,
    Text
} from 'react-vr'; 
import { Easing } from 'react-native'; 

import Card from '../cards/Card';
import CardCol from '../cards/CardCol';
import CardSorter from '../cards/CardSorter';
import Gallery from '../gallery/Gallery';
import GazeButton from '../button/GazeButton';
import ImageCaption from '../cards/ImageCaption';
import ImageCard from '../cards/ImageCard';
import TextCard from '../cards/TextCard';
import VideoCard from '../cards/Card';
import { IMAGE, TEXT } from '../carousel/cardTypes.js';
import CardCarousel from "../carousel/carousel.js";

export default class Gallery3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
                <TextCard>GOOD</TextCard>
                <TextCard>NIGHT</TextCard>
                <TextCard>ALL</TextCard>
                <TextCard>OF</TextCard>
                <TextCard>MY</TextCard>
                <TextCard>EARTHLINGS</TextCard>
            </View>
        );
    }
}



{/* <View style={{
    opacity: 1,
    width: 4096,
    height: 800,
    margin: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    }}
> */}
// </View> 


    // updateStage(input) {
    //     if(this.state.showButton === false) {
    //       this.setState({showButton: true});
    //     }
    //   switch (input) {
    //       case 1:
    //         this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0]});
    //         break;
    //       case 2:
    //         this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0]});
    //         break;
    //       case 3:
    //         this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0]});
    //         break;
    //       case 4:
    //         this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0]});
    //         break;
    //       case 5:
    //         this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0]});
    //         break;
    //       case 6:
    //         this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05]});
    //         break;
    //     }
    //   }

    // updateScene() {
    //     this.setState({color1: "#D8DAF1", color2: "#A482DF", text: "Watch Video"});
    // }