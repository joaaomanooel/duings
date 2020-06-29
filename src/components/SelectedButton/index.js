import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { colors } from '@/constants';

import { Button } from './styles';

export default React.memo(({ onPress, name, lib: Icon }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button><Icon name={name} size={24} color={colors.lightWhite()} /></Button>
    </TouchableWithoutFeedback>
  );
});
