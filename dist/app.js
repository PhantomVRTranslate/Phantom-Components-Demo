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
} from 'phantom_components';

import Navbar from './Navbar';

import { navbarContent } from '../helperFiles/content';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      page: <Page1/>
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(pageId) {
    let page;

    switch(pageId) {
      case 'page1':
        page = <Page1/>;
        break;
      case 'page2':
        page = <Page2/>;
        break;
      case 'page3':
        page = <Page3/>;
        break;
    }

    this.setState({page});
  }

  render() {
    return (
      <View>
      <ContentPlane>
        {this.state.page}
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
