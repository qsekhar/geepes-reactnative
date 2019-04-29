import React, { Component } from 'react';
import { WebView, ScrollView } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground';

import AxiosClient from '../AxiosClient/AxiosClient'

class AboutUsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html : ''
    };

    var formData = new FormData();
    formData.append('template_name', 'template_about_content');

    AxiosClient
      .post('/api/config/get/template/byname', formData)
      .then((result) => this.setState({html: result.data.html}))
  }

  render() {
    return (
      <ViewWithBackground withTraparentHeader={true}>
          <WebView
            style={{
              flex: 1,
              backgroundColor: 'black',
            }}
            source={{html: this.state.html}}
          />
      </ViewWithBackground>
    );
  }
}

export default AboutUsScreen;
