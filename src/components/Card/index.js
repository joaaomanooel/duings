import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { Container, Title, Card, Header, Discount, AnimatableContainer } from './styles';

export default ({ event }) => {
  const [opacity] = useState(new Animated.Value(0));
  const [marginBottom] = useState(new Animated.Value(-50));

  const sortDiscont = (a, b) => {
    if (a.discount > b.discount) return +1;
    if (a.discount < b.discount) return -1;
    return 0;
  };

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

  return (
    <AnimatableContainer style={{ opacity: opacity || 1, marginBottom: marginBottom || 25 }}>
      <Container>
        <Card key={event.id} source={{ uri: event.image }}>
          <Header>
            <Title>{event.title}</Title>
            <Discount>{`${event.cupons.sort(sortDiscont)[0].discount}% off`}</Discount>
          </Header>
        </Card>
      </Container>
    </AnimatableContainer>
  );
};
