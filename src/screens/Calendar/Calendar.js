import React, { useState } from 'react';
import { Card } from '@/components';

import eventsMock from '@/mockApi.json';

import { Body, Cards, Container, Header, Title } from './styles';

export default () => {
  const [events, setEvents] = useState(eventsMock);

  return (
    <Container>
      <Header>
        <Title>Agenda</Title>
      </Header>
      <Body showsVerticalScrollIndicator={false}>
        <Cards>
          {events.map(event => <Card event={event} />)}
        </Cards>
      </Body>
    </Container>
  );
};
