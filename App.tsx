import { useState } from 'react';
import { Appstyle } from './AppStyle';
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { Header } from './src/components/Header';
import LoginScreen from './src/components/Login';
import {UiContextProvider, contextApp } from './src/utils/context/UseContext';
import { ShowNickname } from './src/components/ShowNickame/ShowNick';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
        <UiContextProvider>
              <View style={Appstyle.container}>
              {isLoggedIn ? (
                <>
                  <StatusBar style="light" translucent={false} />
                  <Header titulo="Tabaca 013" />
                  <ShowNickname/>
                </>
              ) : (
                <LoginScreen onLoginSuccess={handleLoginSuccess} />
              )}
            </View>
        </UiContextProvider>
  );
}
