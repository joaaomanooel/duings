import React, { useContext, useState } from 'react';
import { Modal } from '@/components';
import LottieView from 'lottie-react-native';
import loader from '@/assets/loader.json';
import { Button, InputLabel, Input, FormContainer, LoaderContainer } from './styles';

import EventDetailContext from './context';

export default React.memo(({ navigation }) => {
  const { closeModal } = useContext(EventDetailContext);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
    const notifyText = 'Checkin realizado com secesso.';
    return setTimeout(() => navigation.navigate('Home', { notify: true, notifyText }), 5000);
  };

  const renderForm = () => (
    <>
      <FormContainer>
        <InputLabel>Nome:</InputLabel>
        <Input
          placeholder="Ex: João da Silva"
          onChangeText={setName}
          error={nameError}
          value={name}
        />

        <InputLabel>Email:</InputLabel>
        <Input
          placeholder="Ex: joao@email.com"
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
