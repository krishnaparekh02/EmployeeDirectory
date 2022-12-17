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
import { Colors, Fonts, MainStyles, Images, Icons, Matrics, Constants } from './src/CommonConfig';

const App = () => {

  LogBox.ignoreAllLogs();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE}/>
      <Routes />
      <SnackBar ref={snackBarRef} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;
