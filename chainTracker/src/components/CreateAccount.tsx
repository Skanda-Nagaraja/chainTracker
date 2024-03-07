// src/components/CreateAccount.tsx
import React, { useState } from 'react';
import { ApplicationProvider, Layout, Input, Button, Text } from '@ui-kitten/components';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../config/firebase';
import { Alert } from 'react-native';

const CreateAccountScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log('User account created & signed in!');
        } catch (error) {
            console.error('Account creation failed', error);
        }
    };

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text category='h1'>Create Account</Text>
            <Input
                value={name}
                label='Name'
                placeholder='Enter your name'
                onChangeText={setName}
                style={{ marginVertical: 5 }}
            />
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
            <Input
                value={confirmPassword}
                label='Confirm Password'
                placeholder='Enter your password again'
                secureTextEntry
                onChangeText={setConfirmPassword}
                style={{ marginVertical: 5 }}
            />
            <Button style={{ marginVertical: 5 }} onPress={handleCreateAccount}>
                CREATE ACCOUNT
            </Button>
        </Layout>
    );
};

export default CreateAccountScreen;
