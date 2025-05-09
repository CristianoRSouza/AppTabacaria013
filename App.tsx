import { useState } from 'react';
import { Appstyle } from './AppStyle';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import LoginScreen from './src/components/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={Appstyle.container}>
      {isLoggedIn ? (
        <>
          <StatusBar style="light" translucent={false} />
          <Header titulo="Tabaca 013" />
          <Text style={{ color: 'white', marginTop: 20 }}>Bem-vindo!</Text>
        </>
      ) : (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      )}
    </View>
  );
}
