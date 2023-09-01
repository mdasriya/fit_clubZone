import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TrainerLoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trainer Login</Text>
      <TextInput placeholder="Name" />
      {/* Add other form fields */}
      <Button title="Login" onPress={() => console.log('Trainer Logged In')} />
    </View>
  );
}

export default TrainerLoginScreen;
