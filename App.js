import * as React from 'react';
import { View, Text, Button, Modal, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrainingScreen from './Screens/Training';
import RankingScreen from './Screens/Ranking';
import ProfileScreen from './Screens/Profile';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title = "Go to Trainings"
      onPress = {() => navigation.navigate('Training', {itemId: 1, Name: "Said", surname: "Zoroğlu", PN: "05517232850"})}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Training" component={TrainingScreen} />
        <Stack.Screen name="Ranking" component={RankingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} initialParams = {{itemId:1}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;