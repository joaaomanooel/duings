import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { layout, colors } from '@/constants';

const containerHeight = 120;

const Container = styled(Animated.View)`
  background-color: ${colors.green()};
  bottom: ${layout.scale() * 15}px;
  width: ${layout.screenWidth};
  height: ${containerHeight};
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  ${layout.shadow}
  padding: 20px;
  z-index: 15;
`;

const Text = styled.Text`
  color: ${colors.white()};
  font-weight: bold;
  font-size: 16px;
`;

export default React.memo(({ text, show = false }) => {
  const [viewTop] = useState(new Animated.Value(-containerHeight * 1.5));

  const animateOut = () => Animated.timing(viewTop, {
    toValue: -containerHeight * 1.5,
    duration: 1000,
    easing: Easing.back(),
  }).start();

  const animateIn = () => Animated.timing(viewTop, {
    toValue: -20,
    duration: 1000,
    easing: Easing.elastic(),
  }).start();

  useEffect(() => {
    !!show
      ? (() => { animateIn(); setTimeout(() => animateOut(), 3000); })()
      : animateOut();
  }, [show]);

  return (
    <Container style={{ top: viewTop }}>
      <Text>{text}</Text>
    </Container>
  );
});
