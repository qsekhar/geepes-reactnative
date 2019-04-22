import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import ViewWithBackground from '../Components/ViewWithBackground';
import { TextInput, Text, Surface} from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import FlipCard from 'react-native-flip-card'
import WriteMessageScreenStl from '../Themes/Styles/WriteMessageScreenStl';
import NavigationService from '../Navigation/NavigationService';
import Theme from '../Themes/Theme'

import {connect} from 'react-redux';
import {WriteGeepes} from '../StoreManager/Actions'

class SelectContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      name : ''
    };
  }

  componentWillMount(){
    this.props.dispatch({type: 'HIDE_DRAWER_HEADER'});
  }

  componentWillUnmount(){
    this.props.dispatch({type: 'SHOW_DRAWER_HEADER'});
  }

  render() {
    return (
      <ViewWithBackground withTraparentHeader={true}>
        <ScrollView style={WriteMessageScreenStl.container}>
          <TextInput 
            placeholder="Enter a email id"
            onChangeText={(text) => this.setState({email:text})}
          />

          <TextInput 
            placeholder="Enter a name"
            onChangeText={(text) => this.setState({name:text})}
          />

          <View style={WriteMessageScreenStl.previewContainer}>
            <FlipCard
              flipHorizontal={true}
              flipVertical={false}
              perspective={1000}
              friction={30}
            >
              {/* Face Side */}
              <View style={styles.face}>
                <Surface style={WriteMessageScreenStl.detailsSurface}>
                <AutoHeightImage 
                  source={{uri: this.props.originalImage}} 
                  width={Dimensions.get('window').width - 2 * Theme.padding.sm}
                  resizeMode={'cover'}
                  style={WriteMessageScreenStl.detailsImage}
                />
              </Surface>
              </View>
              {/* Back Side */}
              <View style={WriteMessageScreenStl.back}>
                <Text style={[WriteMessageScreenStl.theText, {color: this.props.fontColor, fontFamily: this.props.fontFamily}]}>{this.props.message}</Text>
              </View>
            </FlipCard>
            
          </View>

          <Text>Tap Geepes to See massage</Text>

          <BlueButton
            onPress={() => this.props.dispatch(WriteGeepes.sendGepeesByEmail(this.state))}
            style={WriteMessageScreenStl.nextButton}
          >Send</BlueButton>

        </ScrollView>
      </ViewWithBackground>
    );
  }
}

const mapStateToProps = state => ({
  id : state.WriteGeepes.id,
  title: state.WriteGeepes.title,
  originalImage: state.WriteGeepes.originalImage,
  message: state.WriteGeepes.message,
  fontColor : state.WriteGeepes.fontColor,
  fontFamily: state.WriteGeepes.fontFamily,
  messageCountInfo : state.WriteGeepes.messageCountInfo
})


export default connect(mapStateToProps)(SelectContactScreen);
