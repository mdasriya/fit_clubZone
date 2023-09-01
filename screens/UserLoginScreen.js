import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const UserLoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Login</Text>
      <TextInput placeholder="Name" />
      {/* Add other form fields */}
      <Button title="Login" onPress={() => console.log('User Logged In')} />
    </View>
  );
}

export default UserLoginScreen;
