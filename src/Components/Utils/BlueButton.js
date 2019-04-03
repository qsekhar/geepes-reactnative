import * as React from 'react';
import { Button } from 'react-native-paper';

import Theme from '../../Themes/Theme'

export default BlueButton = (props) =>{
  return <Button mode='contained' color={Theme.colors.accent} {...props} />;
}