import React, { useState } from 'react';
import {View, Text, TextInput,TouchableOpacity, SafeAreaView, Alert,} from 'react-native';
import { UserAuth, LoginProp } from '../../utils/interfaces/User.interfaces';
import { styles } from './style';
import { contextApp } from '../../utils/context/UseContext';

const LoginScreen: React.FC<LoginProp> = ({ onLoginSuccess }) => {

    const [credentials, setCredentials] = useState<UserAuth>({ email:'', password:'', nickname:''});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (field: keyof UserAuth, value: string) => {
        setCredentials(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const validateForm = () => {
        if (!credentials.email.trim() || !credentials.password.trim()) {
            Alert.alert('Erro', 'Preencha todos os campos');
            return false;
        }

        if (!/^\S+@\S+\.\S+$/.test(credentials.email.trim())) {
            Alert.alert('Erro', 'Email inválido');
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        if (!validateForm()) return;

        setIsLoading(true);

        try {
            const response = await fetch("https://66d9ac42-1bca-443c-a208-31b6e8d2f698.mock.pstmn.io/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP! status: ${response.status}`);
            }
            onLoginSuccess();
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Erro', 'Falha no login. Verifique suas credenciais.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={credentials.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    editable={!isLoading}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    value={credentials.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                    secureTextEntry
                    editable={!isLoading}
                />

                <View style={{ height: 50 }} />

                <TouchableOpacity
                    style={[styles.button, isLoading && styles.disabledButton]}
                    onPress={handleLogin}
                    disabled={isLoading}
                >
                    <Text style={styles.buttonText}>
                        {isLoading ? 'Carregando...' : 'Entrar'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
