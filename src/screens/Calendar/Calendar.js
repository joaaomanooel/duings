import React from 'react';
import { Card, AnimatedView } from '@/components';
import { colors } from '@/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Body, Cards, Container, Header, Title, EmptyContainer, EmptyText } from './styles';

export default ({ navigation, calendar }) => {
  const renderList = () => (
    <Body showsVerticalScrollIndicator={false}>
      <Cards>
        {calendar.map(event => (
          <Card
            onPress={() => navigation.navigate('EventDetail', { event })}
            key={Math.random()}
            data={event}
          />
        ))}
      </Cards>
    </Body>
  );

  const renderEmptyContainer = () => (
    <EmptyContainer>
      <AnimatedView>
        <MaterialCommunityIcons
          style={{ textAlign: 'center' }}
          name="calendar-remove-outline"
          color={colors.black(0.5)}
          size={150}
        />
        <EmptyText>Sua agenta está vazia</EmptyText>
      </AnimatedView>
    </EmptyContainer>
  );

  return (
    <Container>
      <Header>
        <Title>Agenda</Title>
      </Header>
      {!!calendar.length ? renderList() : renderEmptyContainer()}
    </Container>
  );
};
