import React, { Component } from 'react';
import { View, ScrollView, Dimensions} from 'react-native';

import Theme from '../Themes/Theme'

import ViewWithBackground from '../Components/ViewWithBackground'
import AutoHeightImage from 'react-native-auto-height-image';
import {Surface, Subheading, Button, Text, Headline} from 'react-native-paper'
import {GreenButton} from '../Components/Utils';
import Icon from 'react-native-vector-icons/FontAwesome';


import MailboxStl from '../Themes/Styles/MailboxStl'

import { connect } from 'react-redux';

class MailDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    headerRight: (
      <Button icon="delete">
      </Button>
    )
  };

  componentWillMount(){
    this.props.dispatch({type: 'HIDE_DRAWER_HEADER'});
  }

  componentWillUnmount(){
    this.props.dispatch({type: 'SHOW_DRAWER_HEADER'});
  }

  render() {
    const { navigation } = this.props;
    //const itemId = navigation.getParam('itemId', 'NO-ID');
    return (
      <ViewWithBackground withTraparentHeader={true}>
        <ScrollView style={MailboxStl.container}>
          <View style={{}}>
            <Surface style={MailboxStl.detailsSurface}>
              <AutoHeightImage 
                source={{uri: 'https://picsum.photos/700'}} 
                width={Dimensions.get('window').width - 2 * Theme.padding.sm}
                resizeMode={'cover'}
                style={MailboxStl.detailsImage}
              />
            </Surface>
            <Headline  style={{}}>Category</Headline>

            <View style={MailboxStl.subdetailsContainer}>
              <View style={MailboxStl.floatContainer}>
                <Icon style={MailboxStl.iconStl} name="user" size={20}/>
                <Text style={MailboxStl.impDetails}>User Name</Text>
              </View>
              <View style={MailboxStl.floatContainer}>
                <Icon style={MailboxStl.iconStl} name="calendar-check-o" size={20}/>
                <Text style={MailboxStl.impDetails}>21th March, 2019 </Text>
              </View>
            </View>

            <View style={MailboxStl.descriptionTextCon}>
              <Text style={MailboxStl.descriptionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
            </View>

            <View>
              <GreenButton>
                  Send to another contact
              </GreenButton>
            </View>
          </View>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(MailDetailsScreen);
