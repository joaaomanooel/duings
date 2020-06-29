import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { layout } from '@/constants';
import LargeButton from './Button';

const Container = styled(Animated.View)`
  bottom: ${layout.scale() * 15}px;
  width: ${layout.screenWidth};
  position: absolute;
  elevation: 15;
  z-index: 15;
`;

export default React.memo(({ show = true, ...props }) => {
  const [viewBottom] = useState(new Animated.Value(0));

  const animateOut = () => Animated.timing(viewBottom, {
    toValue: -100,
    duration: 1000,
    easing: Easing.back(),
  }).start();

  const animateIn = () => Animated.timing(viewBottom, {
    toValue: 0,
    duration: 1000,
    easing: Easing.elastic(),
  }).start();

  useEffect(() => {
    !show ? animateOut() : animateIn();
  }, [show]);

  return (
    <Container style={{ bottom: viewBottom }}>
      <LargeButton {...props} />
    </Container>
  );
});
