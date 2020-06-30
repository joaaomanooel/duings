import { CardWithImage, Notification } from '@/components';
import * as GeoLocation from 'expo-location';
import { colors, images } from '@/constants';
import { RefreshControl, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
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

export default ({ route, navigation, events: AllEvents, getAll, loading }) => {
  const [events, setEvents] = useState(AllEvents);
  const [location, setLocation] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const { notificationText = '' } = route.params || {};

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    (async () => { await getAll(); })();
  }, []);

  useEffect(() => {
    setEvents(AllEvents);
  }, [AllEvents]);

  const handleRefresh = async () => {
    await getAll();
  };

  const debounceEvent = (fn, wait = 1000, time) => (...args) =>
    clearTimeout(time, time = setTimeout(() => fn(...args), wait)); // eslint-disable-line no-param-reassign, implicit-arrow-linebreak, max-len

  const searchEvent = text => e => e.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;

  const sortSearchedEvents = text => (a, b) => {
    if (a.title.indexOf(text.toLowerCase()) > b.title.indexOf(text.toLowerCase())) return 1;
    if (a.title.indexOf(text.toLowerCase()) < b.title.indexOf(text.toLowerCase())) return -1;
    return 0;
  };

  const handleSearch = (text = '') => setEvents(AllEvents
    .filter(searchEvent(text))
    .sort(sortSearchedEvents(text)));

  useEffect(() => {
    debounceEvent(handleSearch, search === '' ? 500 : 1000)(search);
  }, [search]);

  useEffect(() => {
    (async () => {
      const { status } = await GeoLocation.requestPermissionsAsync();
      GeoLocation.installWebGeolocationPolyfill;
      if (status !== 'granted') return null;

      // const { coords } = await GeoLocation.getCurrentPositionAsync({});
      // eslint-disable-next-line max-len
      // const a = await axios.get(`https://api.geodatasource.com/city?key=VOGBRVHJDIZZPSRJW5NYZRD7DOK6GUTY&format=json&lat=${coords.latitude}&lng=${coords.longitude}`);

      // return setLocation(a.data.city);
      // return setLocation('Porto Alegre');
    })();
  }, []);

  return (
    <Container>
      <Notification
        onFinish={() => { setShowNotification(false); }}
        show={showNotification}
        text={notificationText}
      />
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
          <Feather name="search" color={colors.black(0.9)} size={24} />
          <SearchInput
            value={search}
            placeholder="Procurar evento..."
            onChangeText={setSearch}
          />
          {!!search && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <MaterialCommunityIcons name="close" size={20} color={colors.black()} />
            </TouchableOpacity>
          )}
        </SearchContainer>
      </Header>
      <Body
        showsVerticalScrollIndicator={false}
        refreshControl={(
          <RefreshControl
            colors={[colors.yellow()]}
            onRefresh={handleRefresh}
            refreshing={loading}
          />
        )}
      >
        <Title>Eventos</Title>
        {events.map(event => (
          <CardWithImage
            key={event.id}
            event={event}
            onPress={() => navigation.navigate('EventDetail', { event, setShowNotification })}
          />
        ))}
      </Body>
    </Container>
  );
};
