import { CardWithImage } from '@/components';
import * as GeoLocation from 'expo-location';
import { colors, images } from '@/constants';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import eventsMock from '@/mockApi.json';
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

export default ({ navigation }) => {
  const [events, setEvents] = useState(eventsMock);
  const [location, setLocation] = useState(null);

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

  useEffect(() => {
    (async () => {
      const { status } = await GeoLocation.requestPermissionsAsync();
      GeoLocation.installWebGeolocationPolyfill;
      if (status !== 'granted') return null;

      // const { coords } = await GeoLocation.getCurrentPositionAsync({});
      // eslint-disable-next-line max-len
      // const a = await axios.get(`https://api.geodatasource.com/city?key=VOGBRVHJDIZZPSRJW5NYZRD7DOK6GUTY&format=json&lat=${coords.latitude}&lng=${coords.longitude}`);

      // return setLocation(a.data.city);
      return setLocation('Porto Alegre');
    })();
  });

  return (
    <Container>
      <Header>
        <HeaderTop>
          <Logo source={images.logo} resizeMode="contain" />
          <LocationContainer>
            {location && (
              <>
                <Location>{location}</Location>
                <MaterialCommunityIcons name="map-marker" size={24} color={colors.yellow()} />
              </>
            )}
          </LocationContainer>
        </HeaderTop>
        <SearchContainer>
          <Feather name="search" color={colors.white()} size={24} />
          <SearchInput placeholder="Search events" onChangeText={debounceEvent(handleSearch)} />
        </SearchContainer>
      </Header>
      <Body showsVerticalScrollIndicator={false}>
        <Title>Eventos</Title>
        {events.map(event => (
          <CardWithImage
            event={event}
            onPress={() => navigation.navigate('EventDetail', { event })}
          />
        ))}
      </Body>
    </Container>
  );
};
