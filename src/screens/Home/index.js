import { Card } from '@/components';
import { colors, images } from '@/constants';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import eventsMock from './mockApi.json';
import {
  Body,
  Container,
  Header,
  HeaderTop,
  Location,
  LocationContainer,
  Logo,
  SearchContainer,
  SearchInput,
  Title,
} from './styles';

export default () => {
  const [events, setEvents] = useState(eventsMock);

  const debounceEvent = (fn, wait = 1000, time) => (...args) =>
    clearTimeout(time, time = setTimeout(() => fn(...args), wait)); // eslint-disable-line no-param-reassign, implicit-arrow-linebreak, max-len

  const searchEvent = text => e => e.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;

  const sortSearchedEvents = text => (a, b) => {
    if (a.title.indexOf(text.toLowerCase()) > b.title.indexOf(text.toLowerCase())) return 1;
    if (a.title.indexOf(text.toLowerCase()) < b.title.indexOf(text.toLowerCase())) return -1;
    return 0;
  };

  const handleSearch = (text = '') => setEvents(eventsMock
    .filter(searchEvent(text))
    .sort(sortSearchedEvents(text)));

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
          <SearchInput placeholder="Search events" onChangeText={debounceEvent(handleSearch)} />
        </SearchContainer>
      </Header>
      <Body showsVerticalScrollIndicator={false}>
        <Title>Eventos</Title>
        {events.map(event => <Card event={event} />)}
      </Body>
    </Container>
  );
};
