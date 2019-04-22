import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import WriteMessageScreenStl from '../Themes/Styles/WriteMessageScreenStl'
import {Surface, Text, TouchableRipple} from 'react-native-paper'
import {BlueButton} from '../Components/Utils'
import ViewWithBackground from '../Components/ViewWithBackground';

import Theme from '../Themes/Theme'

import NavigationService from '../Navigation/NavigationService'
import {connect} from 'react-redux';

const SwitchBtn = (props) => {
  let {active} = props
  let btnStyl = active ? 
                  [{...WriteMessageScreenStl.toggleBtn},{
                    backgroundColor : Theme.colors.primary
                  }] : 
                  WriteMessageScreenStl.toggleBtn;

  let textStyl = active ? 
                  [{...WriteMessageScreenStl.btnText},{
                    color : '#FFF'
                  }] : 
                  WriteMessageScreenStl.btnText;                 
  return (
    <TouchableRipple
      {...props}
      style={btnStyl}
    >
      <Text
        style = {textStyl}
      >{props.name}</Text>
    </TouchableRipple>
  )
}

class WriteMessageScreen extends Component {
  constructor(props) {
    super(props);
    const {id, title, originalImage} = props.navigation.state.params;
    this.state = {
      id : id,
      title: title,
      originalImage: originalImage,
      fontColor : 'black',
      fontStyle: '',
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.title}`,
  })

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

          <View style={{}}>
            <Surface style={WriteMessageScreenStl.detailsSurface}>
              <AutoHeightImage 
                source={{uri: this.state.originalImage}} 
                width={Dimensions.get('window').width - 2 * Theme.padding.sm}
                resizeMode={'cover'}
                style={WriteMessageScreenStl.detailsImage}
              />
            </Surface>
          </View>

          <View style={WriteMessageScreenStl.messageContainer}>

            <TouchableRipple onPress={() => {}} style={WriteMessageScreenStl.textContainer}>
              <Surface>
                <Text style={[WriteMessageScreenStl.theText, {color: this.state.fontColor}]}>asdsad</Text>
              </Surface>
            </TouchableRipple>

            <View>
              <Text>Select a font</Text>
              <View style={WriteMessageScreenStl.toggleContainer}>
                  <SwitchBtn 
                    onPress = {() => this.setState({fontStyle: ''})}
                    name='Arial'
                    active={false}
                  />
                  <SwitchBtn 
                    name='Zapfino'
                    active={false}
                  />
                  <SwitchBtn 
                    name='Gorgia'
                    active={false}
                  />
                  <SwitchBtn 
                    name='Snell'
                    active={true}
                  />
                  <SwitchBtn 
                    name='Gothic'
                    active={false}
                  />
              </View>
            </View>

            <View>
              <Text>Select a color</Text>
              <View style={WriteMessageScreenStl.toggleContainer}>
                  <SwitchBtn 
                    onPress = {() => this.setState({fontColor: 'red'})}
                    name='Red'
                    active={this.state.fontColor == 'red'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.setState({fontColor: 'green'})}
                    name='Green'
                    active={this.state.fontColor == 'green'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.setState({fontColor: 'black'})}
                    name='Black'
                    active={this.state.fontColor == 'black'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.setState({fontColor: 'blue'})}
                    name='Blue'
                    active={this.state.fontColor == 'blue'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.setState({fontColor: 'purple'})}
                    name='Purple'
                    active={this.state.fontColor == 'purple'}
                  />
              </View>
            </View>
            
          </View>

          <BlueButton
            onPress={() => NavigationService.navigate('SelectContact', {

            })}
            style={WriteMessageScreenStl.nextButton}
          >Next</BlueButton>

        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(WriteMessageScreen);
