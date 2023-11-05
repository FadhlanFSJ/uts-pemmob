import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Article from './screens/article';
import Homepage from './screens/homepage';
import DetailArticle from './screens/detail_article';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Homepage">
          <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
          <Stack.Screen name="Article" component={Article} options={{ headerTitle: 'List Berita'}}/>
          <Stack.Screen name="DetailArticle" component={DetailArticle} options={{ headerTitle: 'Detail Berita'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



export default App;
