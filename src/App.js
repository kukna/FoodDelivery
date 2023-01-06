import React, { useEffect } from 'react';
import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import BottomTab from './screens/bottomTabNavigation';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();


const App= () => {
  useEffect(() => {
  SplashScreen.hide()
  }, [])
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  
});

export default App;
