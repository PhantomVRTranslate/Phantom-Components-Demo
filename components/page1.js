import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import CardContainer from "./cards/CardContainer";
import CardSorter from "./cards/CardSorter";
import Gallery from "./gallery/Gallery";
import GazeButton from "./button/GazeButton";
import ImageCaption from "./cards/ImageCaption";
import ImageCard from "./cards/ImageCard";
import TextCard from "./cards/TextCard";
import VideoCard from "./cards/VideoCard";
import Carousel from "./carousel/Carousel.js";

import GalleryItem from "./gallery/GalleryItem";

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideLeft: new Animated.Value(-1024),
      fadeIn: new Animated.Value(0),
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
        {/* <Carousel
          flex={1}
          imageCollection={[
            'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
            'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d',
            'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
            'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d',
            'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
          ]}
          initialCard={0}
          type="image"
          maxTextLength={120}
        >
        opjwefopjwefopjwefopjwefopjwefopjwefopjwefopjweopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjweffopjwefopjwefopjwefopjwefopjwefopjwefopjwef
        </Carousel> */}
        {/* <TextCard flex={2} cardStyling={{
          padding: 25,
          backgroundColor: 'orange'
        }}>ojpwef</TextCard> */}
        {/*<Gallery
        galleryStyling={{
          backgroundColor: 'lightgray'
        }}
        galleryItemStyling={{
          borderWidth: 2
        }}
        flex={2}>
          <GalleryItem
          type="image"
            src={
              "https://s3.amazonaws.com/project-phantom/DSC_0313.JPG"
            }
          />
          <GalleryItem
           type="text"
            text="Visit Baja Mexico!"
          />
          <GalleryItem
           type="image"
            src={
              "https://s3.amazonaws.com/project-phantom/DSC_0364.JPG"
            }
          />
          <GalleryItem
           type="image"
            src="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
          />
          <GalleryItem
           type="image"
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
           type="image"
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
        </Gallery>*/}
        {/* <ImageCard flex={1} src={'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg'}/> */}
        {/* <CardSorter
          options={{
            type: "video",
            src: "../static_assets/videos/fireplace.mp4"
          }}
        />
        {/* <VideoCard src={'../static_assets/videos/fireplace.mp4'}/> */}
        {/* <TextCard>Hello! It's a good day to be eating Christmsas</TextCard> */}
        {/* <ImageCaption
          flex={1}
          src={'../static_assets/pictures/pup.jpg'}
          caption="A puppy."
          alwaysShow={false}
           /> */}
         <Gallery>
           <GalleryItem
           type="image"
             src="https://s3.amazonaws.com/project-phantom/DSC_0313.JPG"
           />
           <GalleryItem
           type="image"
             src="https://s3.amazonaws.com/project-phantom/cliffs.JPG"
           />
         </Gallery>
        <TextCard  flex={3} cardStyling={{
          padding: 20
        }}>
          Baja, the earth’s second-longest peninsula, offers over 1200km of the mystical, ethereal, majestic and untamed. Those lucky enough to make the full Tijuana to Los Cabos trip will find that the Carretera Transpeninsular (Hwy 1) offers stunning vistas at every turn. The middle of nowhere is more beautiful than you ever imagined, and people are friendly, relaxed and helpful – even in the border towns. Side roads pass through tiny villages and wind drunkenly along the sides of mountains. Condors carve circles into an unblemished blue sky. Some people simply sip drinks, eat fish tacos and watch the sun disappear into the Pacific. Some choose to feel the rush of adrenaline as they surf that perfect wave.
        </TextCard>
        <Gallery>
          <GalleryItem
          type="image"
            src="https://s3.amazonaws.com/project-phantom/DSC_0450.JPG"
          />
          <GalleryItem
          type="image"
            src="https://s3.amazonaws.com/project-phantom/DSC_0090.JPG"
          />
        </Gallery>


      </Animated.View>
    );
  }
}
