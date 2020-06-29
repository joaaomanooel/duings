import React from 'react';
import { Alert, Modal, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/constants';

import { Background, Container, Header, Title, Body } from './styles';

export default React.memo(({ close, title, bodyComponent = () => {} }) => {
  return (
    <Background>
      <Modal
        onRequestClose={() => { Alert.alert('Modal has been closed.'); }}
        animationType="slide"
        hardwareAccelerated
        transparent
        visible
      >
        <Background>
          <Container>
            <Header>
              <Title>{title}</Title>
              <TouchableOpacity onPress={close}>
                <MaterialCommunityIcons name="close" size={24} color={colors.black()} />
              </TouchableOpacity>
            </Header>
            <Body>
              {bodyComponent()}
            </Body>
          </Container>
        </Background>
      </Modal>
    </Background>
  );
});
