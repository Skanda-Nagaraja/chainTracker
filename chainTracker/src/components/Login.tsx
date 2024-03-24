// src/components/Login.tsx
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { ApplicationProvider, Layout, Input, Button, Text } from '@ui-kitten/components';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { firebaseAuth } from '../config/firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginUser(email: string, password: string) {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        Alert.alert( 
        "Login Successful", 
        "You are now signed in!", 
        [
          {text: "OK", onPress: () => console.log("OK Pressed")}
        ],
        { cancelable: false }
      );
      })
      .catch((error) => {
        // Error Handling 
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
      });
  }

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text category='h1'>Login</Text>
      <Input
        value={email}
        label='Email'
        placeholder='Enter your email'
        onChangeText={setEmail}
        style={{ marginVertical: 5 }}
      />
      <Input
        value={password}
        label='Password'
        placeholder='Enter your password'
        secureTextEntry
        onChangeText={setPassword}
        style={{ marginVertical: 5 }}
      />
      <Button style={{ marginVertical: 5 }} onPress={() => loginUser(email, password)}>
        LOGIN
      </Button>

    </Layout>
  );
};

export default LoginScreen;