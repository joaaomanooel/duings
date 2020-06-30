import React, { useContext, useState } from 'react';
import { Modal, Input } from '@/components';
import LottieView from 'lottie-react-native';
import loader from '@/assets/loader.json';
import * as UserActions from '@/redux/User';
import { useSelector, useDispatch } from 'react-redux';
import { Button, FormContainer, LoaderContainer } from './styles';

import EventDetailContext from './context';

export default React.memo(({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const { closeModal, setShowNotification } = useContext(EventDetailContext);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [loading, setLoading] = useState(false);

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
    const notificationText = 'Dados atualizados com secesso.';
    dispatch(UserActions.setUser({ name, email }));
    return setTimeout(() => {
      closeModal();
      navigation.navigate('Settings', { notificationText });
      setShowNotification(true);
    }, 2000);
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
        />

        <Input
          label="Email:"
          placeholder="Ex: joao@email.com"
          onChangeText={setEmail}
          error={emailError}
          value={email}
        />
      </FormContainer>

      <Button onPress={handleButton} text="Salvar" />
    </>
  );

  return loading ? (
    <LoaderContainer>
      <LottieView source={loader} autoPlay loop resizeMode="contain" style={{ height: 200 }} />
    </LoaderContainer>
  ) : <Modal close={closeModal} title="Checkin" bodyComponent={renderForm} />;
});
