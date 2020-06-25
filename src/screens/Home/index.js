import React from 'react';
import { Text } from 'react-native';

import { Header, Body, Container, Title, Card, CardHeader, CartTitle, Discount } from './styles';

import events from './mockApi.json';

export default () => {
  return (
    <Container>
      <Header>
        <Text>Início</Text>
      </Header>
      <Body>
        <Title>Eventos</Title>
        {events.map(event => (
          <Card key={event.id} source={{ uri: event.image }}>
            <CardHeader>
              <CartTitle>{event.title}</CartTitle>
              <Discount>
                {`${event.cupons.sort((a, b) => {
                  if (a.discount > b.discount) return +1;
                  if (a.discount < b.discount) return -1;
                  return 0;
                })[0].discount}% off`}
              </Discount>
            </CardHeader>
          </Card>
        ))}
      </Body>
    </Container>
  );
};
