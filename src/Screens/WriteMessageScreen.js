import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import WriteMessageScreenStl from '../Themes/Styles/WriteMessageScreenStl'
import {Surface, Text, TouchableRipple} from 'react-native-paper'
import Dialog from "react-native-dialog";
import {BlueButton} from '../Components/Utils'
import ViewWithBackground from '../Components/ViewWithBackground';

import Theme from '../Themes/Theme'

import NavigationService from '../Navigation/NavigationService'
import {connect} from 'react-redux';
import {WriteGeepes} from '../StoreManager/Actions'

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
      dialogVisible: false,
    };

    this.props.dispatch(WriteGeepes.changeCard({
      id : id,
      title: title,
      originalImage: originalImage
    }));


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

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
    WriteGeepes.changeMessage('')
  };
 
  handleOK = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });
  };

  render() {
    return (
      <ViewWithBackground withTraparentHeader={true}>
        <ScrollView style={WriteMessageScreenStl.container}>

          <View style={{}}>
            <Surface style={WriteMessageScreenStl.detailsSurface}>
              <AutoHeightImage 
                source={{uri: this.props.originalImage}} 
                width={Dimensions.get('window').width - 2 * Theme.padding.sm}
                resizeMode={'cover'}
                style={WriteMessageScreenStl.detailsImage}
              />
            </Surface>
          </View>

          <View style={WriteMessageScreenStl.messageContainer}>

            <TouchableRipple onPress={this.showDialog} style={WriteMessageScreenStl.textContainer}>
              <Surface>
                <Text style={[WriteMessageScreenStl.theText, {color: this.props.fontColor, fontFamily: this.props.fontFamily}]}>{this.props.message}</Text>
              </Surface>
            </TouchableRipple>

            <View>
              <Text>Select a font</Text>
              <View style={WriteMessageScreenStl.toggleContainer}>
                  <SwitchBtn 
                    onPress = {() =>  this.props.dispatch(WriteGeepes.changeFontFamily('Arial'))}
                    name='Arial'
                    active={this.props.fontFamily == 'Arial'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontFamily('Zapfino'))}
                    name='Zapfino'
                    active={this.props.fontFamily == 'Zapfino'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontFamily('Gorgia'))}
                    name='Gorgia'
                    active={this.props.fontFamily == 'Gorgia'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontFamily('Snell'))}
                    name='Snell'
                    active={this.props.fontFamily == 'Snell'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontFamily('Gothic'))}
                    name='Gothic'
                    active={this.props.fontFamily == 'Gothic'}
                  />
              </View>
            </View>

            <View>
              <Text>Select a color</Text>
              <View style={WriteMessageScreenStl.toggleContainer}>
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontColor('red'))}
                    name='Red'
                    active={this.props.fontColor == 'red'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontColor('green'))}
                    name='Green'
                    active={this.props.fontColor == 'green'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontColor('black'))}
                    name='Black'
                    active={this.props.fontColor == 'black'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontColor('blue'))}
                    name='Blue'
                    active={this.props.fontColor == 'blue'}
                  />
                  <SwitchBtn 
                    onPress = {() => this.props.dispatch(WriteGeepes.changeFontColor('purple'))}
                    name='Purple'
                    active={this.props.fontColor == 'purple'}
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

        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>{this.props.messageCountInfo}</Dialog.Title>
          <Dialog.Input 
            multiline={true}
            onChangeText={(message) => this.props.dispatch(WriteGeepes.changeMessage(message))}
            maxLength = {120}
            value={this.props.message}
            height={40}
            style={{height:100}}
          />
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="OK" onPress={this.handleOK} />
        </Dialog.Container>

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

export default connect(mapStateToProps)(WriteMessageScreen);
