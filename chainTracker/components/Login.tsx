import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Input, Button, Text } from '@ui-kitten/components';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text category='h1'>Login</Text>
      <Input
        value={email}
        label='Email'
        placeholder='Enter your email'
        onChangeText={nextValue => setEmail(nextValue)}
        style={{ marginVertical: 5 }}
      />
      <Input
        value={password}
        label='Password'
        placeholder='Enter your password'
        secureTextEntry
        onChangeText={nextValue => setPassword(nextValue)}
        style={{ marginVertical: 5 }}
      />
      <Button style={{ marginVertical: 5 }} onPress={() => console.log(email, password)}>
        LOGIN
      </Button>
    </Layout>
  );
};

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <LoginScreen />
  </ApplicationProvider>
);
