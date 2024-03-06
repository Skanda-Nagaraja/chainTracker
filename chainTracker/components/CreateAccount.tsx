import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Input, Button, Text } from '@ui-kitten/components';
import { Alert } from 'react-native';

const LoginScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = () => {
        if (password === confirmPassword) {
            console.log('Logging in with:', email, password);
        } else {
            Alert.alert('Error', 'Passwords do not match');
        }
    };

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text category='h1'>Create Account</Text>
            <Input
                value={name}
                label='Name'
                placeholder='name'
                onChangeText={nextValue => setName(nextValue)}
                style={{ marginVertical: 5 }}
            />
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
            <Input
                value={confirmPassword}
                label='Confirm Password' 
                placeholder='Enter your password again'
                secureTextEntry
                onChangeText={nextValue => setConfirmPassword(nextValue)} 
                style={{ marginVertical: 5 }}
            />
            <Button style={{ marginVertical: 5 }} onPress={handleLogin}>
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
