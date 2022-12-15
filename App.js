import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// --------------- ASSETS ---------------
import Routes from './src/Routes';


const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <Routes />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;
