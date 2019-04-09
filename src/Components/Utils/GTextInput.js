import * as React from 'react';
import { TextInput } from 'react-native-paper';

export default GTextInput = (props) => {
  return <TextInput
    label='Email'
    mode='flat'
    error={false}
    value={this.state.text}
    onChangeText={text => this.setState({ text })}

    {...props}
  />
}