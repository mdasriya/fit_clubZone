import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
  

<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text style={styles.heading}>Welcome to Fitness Club</Text>
<View style={styles.buttonContainer}>
<Button style={{marginBottom:"10px"}} title="User Login" onPress={() => navigation.navigate('UserLogin')} />
<Button title="Trainer Login" onPress={() => navigation.navigate('TrainerLogin')} />
</View>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24, // Larger font size
    marginBottom: 20, // Add margin at the bottom
  },
  buttonContainer: {
    flexDirection: 'col', // Display buttons horizontally
  },
  buttonGap: {
    width: 20, // Add gap between buttons
    
  },
});

export default HomeScreen;
