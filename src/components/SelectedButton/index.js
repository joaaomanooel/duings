import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Button } from './styles';

export default ({ onPress, name, lib: Icon }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button>
        <Icon name={name} size={24} color="#FFF" />
      </Button>
    </TouchableWithoutFeedback>
  );
};
