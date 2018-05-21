import React from "react";
import {
    View,
} from "react-vr";

// Import your custom pages here
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

import {
  ContentPlane,
  Navbar
} from '../Phantom_Components/index';

import { navbarContent } from '../helperFiles/content';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      page: 'page1'
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(pageId) {
    this.setState({page: pageId});
  }

  render() {
    let currPage ;
    switch(this.state.page) {
      case 'page1':
        currPage = <Page1 />;
        break;
      case 'page2':
        currPage = <Page2 />;
        break;
      case 'page3':
        currPage = <Page3 />;
        break;
      default:
        break;
    }

    return (
      <View>
      <ContentPlane>
        {currPage}
       </ContentPlane>

        <Navbar
          content={navbarContent}
          changePage={this.changePage.bind(this)}
          page={this.state.page}
          progressColor="darkcyan"
          navbarStyle = {{
            borderColor: '#a8fff1',
            padding: .01,
            margin: .01,
          }}
          linkBgColor='#0d5045'
          linkSelectedColor='#1e8675'
          />
      </View>
    );
  }
}
