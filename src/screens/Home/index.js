import React from 'react';
import { Card } from '@/components';
import { Text } from 'react-native';

import { Header, Body, Container, Title } from './styles';
import events from './mockApi.json';

export default () => {
  return (
    <Container>
      <Header>
        <Text>Início</Text>
      </Header>
      <Body>
        <Title>Eventos</Title>
        {events.map(event => <Card event={event} />)}
      </Body>
    </Container>
  );
};
