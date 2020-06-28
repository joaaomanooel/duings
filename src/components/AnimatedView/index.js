import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export default (props) => {
  const [opacity] = useState(new Animated.Value(0));
  const [marginBottom] = useState(new Animated.Value(-50));

  const fadeIn = () => Animated.timing(opacity, {
    toValue: 1,
    duration: 1000,
    easing: Easing.elastic(),
  }).start();

  const bounceInUp = () => Animated.timing(marginBottom, {
    toValue: 25,
    duration: 1000,
    easing: Easing.elastic(),
  }).start();

  useEffect(() => {
    fadeIn();
    bounceInUp();
  }, []);

  return (<Animated.View {...props} style={{ opacity, marginBottom }} />);
};
