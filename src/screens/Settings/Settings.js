import React from 'react';
import { colors } from '@/constants';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Body, Container, Header, Label, RowContainer, SettingsContainer, Title } from './styles';

export default () => {
  return (
    <Container>
      <Header>
        <Title>Ajustes</Title>
        <TouchableOpacity>
          <MaterialCommunityIcons name="pencil-outline" size={24} color={colors.black()} />
        </TouchableOpacity>
      </Header>
      <Body showsVerticalScrollIndicator={false}>
        <SettingsContainer>
          <RowContainer>
            <Label>Nome</Label>
            <Label>João Manoel</Label>
          </RowContainer>
          <RowContainer>
            <Label>Email</Label>
            <Label>joaaomanooel@gmail.com</Label>
          </RowContainer>
        </SettingsContainer>
      </Body>
    </Container>
  );
};
