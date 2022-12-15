import React from 'react';
import {
  StatusBar,
  StyleSheet,
  LogBox,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// --------------- ASSETS ---------------
import Routes from './src/Routes';
import { snackBarRef } from './src/Helpers/Popup';
import { SnackBar } from './src/Components/Common';

const App = () => {

  LogBox.ignoreAllLogs();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <Routes />
      <SnackBar ref={snackBarRef} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;
