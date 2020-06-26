import React from 'react';
import { Card } from '@/components';
import { colors, images } from '@/constants';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Header,
  Body,
  Container,
  Title,
  SearchContainer,
  SearchInput,
  HeaderTop,
  Logo,
  LocationContainer,
  Location,
} from './styles';
import events from './mockApi.json';

export default () => {
  return (
    <Container>
      <Header>
        <HeaderTop>
          <Logo source={images.logo} resizeMode="contain" />
          <LocationContainer>
            <Location>Porto Alegre</Location>
            <MaterialCommunityIcons name="map-marker" size={24} color={colors.yellow()} />
          </LocationContainer>
        </HeaderTop>
        <SearchContainer>
          <Feather name="search" color={colors.white()} size={24} />
          <SearchInput placeholder="Search events" />
        </SearchContainer>
      </Header>
      <Body>
        <Title>Eventos</Title>
        {events.map(event => <Card event={event} />)}
      </Body>
    </Container>
  );
};
