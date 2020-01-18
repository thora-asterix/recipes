import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/ConfigureStore'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import RecipesNavigator from  './navigation/RecipesNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const store = ConfigureStore();
export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
    <AppLoading
    startAsync={fetchFonts}
    onFinish={() =>setFontLoaded(true)}
     />)
  }

  return (
    <Provider store={store}>
      <RecipesNavigator />
       {/* <Main /> */}
       </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
