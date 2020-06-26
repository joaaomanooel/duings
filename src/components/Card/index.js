import React from 'react';
import { Container, Title, Card, Header, Discount } from './styles';

export default ({ event }) => {
  const sortDiscont = (a, b) => {
    if (a.discount > b.discount) return +1;
    if (a.discount < b.discount) return -1;
    return 0;
  };

  return (
    <Container>
      <Card key={event.id} source={{ uri: event.image }}>
        <Header>
          <Title>{event.title}</Title>
          <Discount>{`${event.cupons.sort(sortDiscont)[0].discount}% off`}</Discount>
        </Header>
      </Card>
    </Container>
  );
};
