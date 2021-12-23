import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

function RankingScreen({navigation}) {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ranking Screen</Text>
        <Button 
        title = "Go to Profile"
        onPress = {() => navigation.navigate("Profile")}/>
        <Button title = "Home" onPress = {() => navigation.navigate("Home")}/>

      </View>
    );
  }

export default RankingScreen;
