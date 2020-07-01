import React, { useContext, useState } from 'react';
import { Modal, Input } from '@/components';
import LottieView from 'lottie-react-native';
import * as UserActions from '@/redux/User';
import * as EventsActions from '@/redux/Events';
import loader from '@/assets/loader.json';
import { useSelector, useDispatch } from 'react-redux';
import { Button, FormContainer, LoaderContainer } from './styles';

import EventDetailContext from './context';

export default React.memo(({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const { closeModal, setShowNotification, currentEvent } = useContext(EventDetailContext);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);

  const validForm = () => {
    let hasError = false;
    if (name === '') {
      setNameError(true);
      hasError = true;
    }
    if (email === '') {
      setEmailError(true);
      hasError = true;
    }
    return !hasError;
  };

  const clearError = () => {
    setEmailError(false);
    setNameError(false);
  };

  const handleButton = () => {
    clearError();
    if (!validForm()) return null;
    setLoading(true);
    const notificationText = 'Checkin realizado com secesso.';

    dispatch(UserActions.setUser({ name, email }));
    dispatch(EventsActions.checkinRequest({
      checkin: { name, email, eventId: currentEvent.id },
      event: currentEvent,
    }));

    return setTimeout(() => {
      closeModal();
      navigation.navigate('Home', { notificationText });
      setShowNotification(true);
    }, 3000);
  };

  const renderForm = () => (
    <>
      <FormContainer>
        <Input
          label="Name:"
          placeholder="Ex: João da Silva"
          onChangeText={setName}
          error={nameError}
          value={name}
          autoFocus
        />

        <Input
          label="Email:"
          autoCompleteType="email"
          textContentType="emailAddress"
          placeholder="Ex: joao@email.com"
          keyboardType="email-address"
          onChangeText={setEmail}
          error={emailError}
          value={email}
        />
      </FormContainer>

      <Button onPress={handleButton} text="Finalizar" />
    </>
  );

  return loading ? (
    <LoaderContainer>
      <LottieView source={loader} autoPlay loop resizeMode="contain" style={{ height: 200 }} />
    </LoaderContainer>
  ) : <Modal close={closeModal} title="Checkin" bodyComponent={renderForm} />;
});
