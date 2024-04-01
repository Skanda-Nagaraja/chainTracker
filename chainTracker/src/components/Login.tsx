import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Layout, Input, Button, Text } from '@ui-kitten/components';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from "firebase/auth"; // Corrected import here


import { firebaseAuth } from '../config/firebase';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
});

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (email: string, password: string) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential.user);
        Alert.alert("Login Successful", "You are now signed in!", [{ text: "OK" }]);
      })
      .catch((error) => {
        console.error("Error signing in:", error.code, error.message);
      });
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(firebaseAuth, googleCredential); 
      console.log('User signed in with Google:', userCredential.user);
      Alert.alert("Login Successful", "You are now signed in with Google!");
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

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
      <Button style={{ marginVertical: 5 }} onPress={signInWithGoogle}>
        Sign in with Google
      </Button>
    </Layout>
  );
};

export default LoginScreen;
