import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

function TrainingScreen({route, navigation}) {
    const {itemId, name, surname, PN} = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Training Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>name: {JSON.stringify(name)}</Text>
        <Text>surname: {JSON.stringify(surname)}</Text>
        <Text>PN: {JSON.stringify(PN)}</Text>
        <Button 
        title = "Go to Ranking Screen"
        onPress = {() => navigation.navigate("Ranking")}/>
      </View>
    );
  }

export default TrainingScreen;
