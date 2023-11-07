import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Article, Homepage, DetailArticle } from './screens';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Homepage">
          <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
          <Stack.Screen name="Article" component={Article} options={{ headerTitle: 'List Berita', 
          headerStyle: {
            backgroundColor: 'red',
            elevation: 5,
          }, headerTitleStyle: {
            color: 'white'
          }
          }}/>
          <Stack.Screen name="DetailArticle" component={DetailArticle} options={{ headerTitle: 'Detail Berita', 
          headerStyle:{
            backgroundColor: 'red',
          }, headerTitleStyle: {
            color: 'white'
          }}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



export default App;
