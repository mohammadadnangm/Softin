/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import { WebView } from 'react-native-webview';

const App = () => {

  return (
    
       
        <WebView source={{ uri: 'https://softin.org/' }} />
      
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  
});

export default App;
