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

export default ({ route, navigation }) => {
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
            <RowView>
              <MaterialCommunityIcons name="map-marker-outline" size={24} color={colors.yellow()} />
              <DetailInfoText>Av. da Azenha, 173, Porto Alegre</DetailInfoText>
            </RowView>
            <RowView>
              <MaterialCommunityIcons name="clock-outline" size={24} color={colors.yellow()} />
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
      <AnimatedButton onPress={() => setShowModal(true)} show={showButton} text="Checkin" />
      <EventDetailContext.Provider
        value={{ closeModal: () => setShowModal(false), setShowNotification }}
      >
        {showModal && (<FormModal navigation={navigation} />)}
      </EventDetailContext.Provider>
    </Container>
  );
};
