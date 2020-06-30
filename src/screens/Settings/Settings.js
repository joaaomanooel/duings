import React, { useState, useEffect } from 'react';
import { colors } from '@/constants';
import { Notification } from '@/components';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Body, Container, Header, Label, RowContainer, SettingsContainer, Title } from './styles';

import FormModal from './FormModal';
import SettingsContext from './context';

export default ({ route, navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('João Manoel');
  const [email, setEmail] = useState('joaaomanooel@gmail.com');
  const { notificationText = '' } = route.params || {};

  const [showNotification, setShowNotification] = useState(false);

  return (
    <Container>
      <Notification
        onFinish={() => setShowNotification(false)}
        show={showNotification}
        text={notificationText}
      />
      <Header>
        <Title>Ajustes</Title>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <MaterialCommunityIcons name="pencil-outline" size={24} color={colors.black()} />
        </TouchableOpacity>
      </Header>
      <Body showsVerticalScrollIndicator={false}>
        <SettingsContainer>
          <RowContainer>
            <Label>Nome</Label>
            <Label>{name}</Label>
          </RowContainer>
          <RowContainer>
            <Label>Email</Label>
            <Label>{email}</Label>
          </RowContainer>
        </SettingsContainer>
      </Body>
      <SettingsContext.Provider
        value={{ closeModal: () => setShowModal(false), setShowNotification }}
      >
        {showModal && (<FormModal navigation={navigation} />)}
      </SettingsContext.Provider>
    </Container>
  );
};
