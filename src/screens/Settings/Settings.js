import React, { useState, useEffect } from 'react';
import { colors } from '@/constants';
import { Notification } from '@/components';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { version } from '@/root/package.json';

import {
  Body,
  Container,
  Header,
  Label,
  RowContainer,
  SettingsContainer,
  Title,
  Version,
} from './styles';

import FormModal from './FormModal';
import SettingsContext from './context';

export default ({ route, navigation, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const { notificationText = '' } = route.params || {};

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

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
        <Version>{`v${version}`}</Version>
      </Body>
      <SettingsContext.Provider
        value={{ closeModal: () => setShowModal(false), setShowNotification }}
      >
        {showModal && (<FormModal navigation={navigation} />)}
      </SettingsContext.Provider>
    </Container>
  );
};
