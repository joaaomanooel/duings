import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ptBrLocale from 'date-fns/locale/pt-BR';
import { AnimatedButton } from '@/components';
import { colors } from '@/constants';
import { format } from 'date-fns';
import {
  Body,
  Container,
  CurrencyIcon,
  Description,
  DescriptionContainer,
  DetailContainer,
  DetailIcon,
  DetailInfoText,
  Header,
  HeaderTop,
  IconContainer,
  RowView,
  SubTitle,
  Title,
  TitleContainer,
} from './styles';
import FormModal from './FormModal';
import EventDetailContext from './context';

export default ({ route, navigation, calendar = [] }) => {
  const { event, setShowNotification } = route.params;
  const [showButton, setShowButton] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <ScrollView
        onScrollBeginDrag={() => setShowButton(false)}
        onScrollEndDrag={() => setShowButton(true)}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar animated translucent backgroundColor="transparent" barStyle="light-content" />
        <Header source={{ uri: event.image }}>
          <HeaderTop>
            <IconContainer onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="arrow-left" size={24} color={colors.white()} />
            </IconContainer>
          </HeaderTop>
        </Header>
        <Body>
          <TitleContainer>
            <Title>{event.title}</Title>
          </TitleContainer>
          <DetailContainer>
            <SubTitle>Detalhes</SubTitle>
            {(event.location && event.location.formatted) && (
              <RowView>
                <DetailIcon name="map-marker-outline" />
                <DetailInfoText>{`${event.location.formatted}`}</DetailInfoText>
              </RowView>
            )}
            <RowView>
              <DetailIcon name="clock-outline" />
              <DetailInfoText>{format(event.date, 'PPPp', { locale: ptBrLocale })}</DetailInfoText>
            </RowView>
            <RowView>
              <CurrencyIcon />
              <DetailInfoText>{`R$ ${event.price}`}</DetailInfoText>
            </RowView>
          </DetailContainer>
          <DescriptionContainer>
            <SubTitle>Descrição</SubTitle>
            <Description>{event.description}</Description>
          </DescriptionContainer>
        </Body>
      </ScrollView>
      {(!!calendar.find(e => e.id !== event.id) || !calendar.length) && (
        <AnimatedButton onPress={() => setShowModal(true)} show={showButton} text="Checkin" />
      )}
      <EventDetailContext.Provider
        value={{
          closeModal: () => setShowModal(false),
          setShowNotification,
          currentEvent: event,
        }}
      >
        {showModal && (<FormModal navigation={navigation} />)}
      </EventDetailContext.Provider>
    </Container>
  );
};
