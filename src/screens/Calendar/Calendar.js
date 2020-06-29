import React, { useState } from 'react';
import { Card } from '@/components';

import eventsMock from '@/mockApi.json';

import { Body, Cards, Container, Header, Title } from './styles';

export default ({ navigation }) => {
  const [events] = useState(eventsMock);

  const sortByDate = (a, b) => {
    if (new Date(a.date) > new Date(b.date)) return 1;
    if (new Date(a.date) < new Date(b.date)) return -1;
    return 0;
  };

  return (
    <Container>
      <Header>
        <Title>Agenda</Title>
      </Header>
      <Body showsVerticalScrollIndicator={false}>
        <Cards>
          {events.sort(sortByDate).map(event => (
            <Card data={event} onPress={() => navigation.navigate('EventDetail', { event })} />
          ))}
        </Cards>
      </Body>
    </Container>
  );
};
